import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Check, X } from 'lucide-react'

const features = [
  { name: 'Collaborators', free: 'Up to 3', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Projects', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Version History', free: false, pro: true, enterprise: true },
  { name: 'Advanced Editing', free: false, pro: true, enterprise: true },
  { name: 'Priority Support', free: false, pro: true, enterprise: true },
  { name: 'Custom Integrations', free: false, pro: false, enterprise: true },
  { name: 'On-premise Deployment', free: false, pro: false, enterprise: true },
  { name: '24/7 Phone Support', free: false, pro: false, enterprise: true },
]

export default function PricingComparison() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Compare Plans</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            <TableHead>Free</TableHead>
            <TableHead>Pro</TableHead>
            <TableHead>Enterprise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell>{feature.name}</TableCell>
              <TableCell>{renderValue(feature.free)}</TableCell>
              <TableCell>{renderValue(feature.pro)}</TableCell>
              <TableCell>{renderValue(feature.enterprise)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function renderValue(value: string | boolean) {
  if (typeof value === 'string') return value
  return value ? <Check className="text-green-500" /> : <X className="text-red-500" />
}