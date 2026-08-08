export default function SaveStatus({
  pending,
  error,
  saved,
  onSave,
}: {
  pending: boolean;
  error?: string;
  saved: boolean;
  onSave: () => void;
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={onSave}
        disabled={pending}
        className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save"}
      </button>
      {error ? (
        <p className="text-sm font-medium text-red-600">{error}</p>
      ) : null}
      {!pending && !error && saved ? (
        <p className="text-sm font-medium text-emerald-600">Saved</p>
      ) : null}
    </div>
  );
}
