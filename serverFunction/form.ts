"use server";

import { google } from "googleapis";

// export const runtime = "nodejs"; // ensures Node runtime (googleapis needs it)

type Values = {
  name: string;
  email: string;
  phoneCode: string;
  phone: string;
  location: string;
  service: string;
};

export async function submitFormValue(formValues: Values) {
  try {
    // 1) Auth
    const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

    await auth.authorize();

    // 2) Sheets client
    const sheets = google.sheets({ version: "v4", auth });

    // 3) Prepare row
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const row = [
      timestamp,
      formValues.name,
      formValues.email,
      formValues.phoneCode,
      formValues.phone,
      formValues.location,
      formValues.service,
    ];

    // 4) Append to Sheet1!A:F (change range/sheet name if needed)
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    return { success: true };
  } catch (err) {
    console.error("Google Sheets append error:", err);
    throw new Error("Failed to write to Google Sheets");
  }
}
