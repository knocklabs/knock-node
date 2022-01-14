export interface BulkOperation {
  id: string;
  name: string;
  status: "queued" | "processing" | "completed" | "failed";
  processed_rows: number;
  estimated_total_rows: number;
  started_at?: string;
  completed_at?: string;
  failed_at?: string;
  inserted_at: string;
  updated_at: string;
}
