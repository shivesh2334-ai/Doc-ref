import { google } from "googleapis";

function getAuth() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY environment variables."
    );
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

/**
 * Appends a row to the given sheet tab. Creates the header row automatically
 * on first write if the tab is empty.
 */
export async function appendRow(
  sheetTabName: string,
  headerRow: string[],
  dataRow: (string | number)[]
) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID environment variable.");
  }

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  // Check if the tab already has a header row; if not, write one first.
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetTabName}!A1:A1`,
  });

  if (!existing.data.values || existing.data.values.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetTabName}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [headerRow] },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetTabName}!A:A`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [dataRow] },
  });
}
