import { getSupabase } from "../lib/supabase";

export const dynamic = "force-dynamic";

type TableRow = Record<string, unknown>;

function formatCell(value: unknown) {
  if (value === null || value === undefined) return "—";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

export default async function Home() {
  let rows: TableRow[] = [];
  let errorMessage = "";

  try {
    const { data, error } = await getSupabase()
      .from("test data")
      .select("*");

    if (error) {
      errorMessage = error.message;
    } else {
      rows = (data ?? []) as TableRow[];
    }
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Unable to load the table.";
  }

  const columns = rows.length > 0 ? Object.keys(rows[0]) : [];

  return (
    <section className="table-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Supabase data view</p>
          <h2>Test data</h2>
        </div>
        <span className="row-count">
          {rows.length} {rows.length === 1 ? "row" : "rows"}
        </span>
      </div>

      {errorMessage ? (
        <div className="message error" role="alert">
          {errorMessage}
        </div>
      ) : rows.length === 0 ? (
        <div className="message">No rows found in the test data table.</div>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column) => (
                    <td key={column}>{formatCell(row[column])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}