export default function ProjectStatus({ status }) {
  if (!status) return null;
  return <span className="tag tag--status">{status}</span>;
}
