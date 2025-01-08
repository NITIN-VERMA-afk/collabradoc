import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'For individuals and small teams just getting started',
    features: ['Up to 3 collaborators', '1 project', 'Basic editing features', 'Community support'],
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'For growing teams that need more power and flexibility',
    features: ['Unlimited collaborators', 'Unlimited projects', 'Advanced editing features', 'Priority support', 'Version history'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: ['Custom integrations', 'Dedicated account manager', 'On-premise deployment option', '24/7 phone support', 'Advanced security features'],
  },
]

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {tiers.map((tier) => (
        <Card key={tier.name} className="flex flex-col">
          <CardHeader>
            <CardTitle>{tier.name}</CardTitle>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-4xl font-bold mb-4">{tier.price}</p>
            <ul className="space-y-2">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">{tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}