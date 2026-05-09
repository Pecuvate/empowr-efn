const roles = [
  { role: "Head Coach", rate: "£20.00 per hour" },
  { role: "Assistant Coach (21 and over)", rate: "£13.00 per hour" },
  { role: "Assistant Coach (18–20)", rate: "£11.00 per hour" },
  { role: "Operations & Support Roles", rate: "£13.00 per hour" },
];

export default function RolesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 pr-8 font-semibold text-foreground">Role</th>
            <th className="text-left py-3 font-semibold text-foreground">Rate</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(({ role, rate }) => (
            <tr key={role} className="border-b border-border last:border-0">
              <td className="py-3 pr-8 text-foreground">{role}</td>
              <td className="py-3 text-mid">{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
