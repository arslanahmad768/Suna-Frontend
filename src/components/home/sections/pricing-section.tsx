"use client";

import { CheckIcon } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
interface Tier {
  title: string;
  description: string;
  price: number;
  gumroadUrl: string;
  features: string[];
}

interface PricingSectionProps {
  returnUrl?: string;
  showTitleAndTabs?: boolean;
}

export function PricingSection({ returnUrl, showTitleAndTabs = true }: PricingSectionProps) {
  const { user } = useAuth();
  const tiers: Tier[] = [
    {
      title: "Starter Plan",
      description: "Perfect for individuals and small teams.",
      price: 5,
      gumroadUrl: user
        ? `https://rehmantech5.gumroad.com/l/qmfdix?wanted=true&email=${encodeURIComponent(user.email)}&redirect_url=http://localhost:3000/dashboard`
        : "/auth",
      features: ["1 Project", "Community Support", "All Future Updates"],
    },
    {
      title: "Pro Plan",
      description: "For growing teams and heavier workloads.",
      price: 15,
      gumroadUrl: user
        ? `https://rehmantech5.gumroad.com/l/wgsnusx?wanted=true&email=${encodeURIComponent(user.email)}&redirect_url=${encodeURIComponent(returnUrl ?? "")}`
        : "/auth",
      features: ["5 Projects", "Priority Support", "Advanced Features"],
    },
    {
      title: "Enterprise Plan",
      description: "For enterprises with custom needs.",
      price: 30,
      gumroadUrl: user
        ? `https://rehmantech5.gumroad.com/l/teeklh?wanted=true&email=${encodeURIComponent(user.email)}&redirect_url=${encodeURIComponent(returnUrl ?? "")}`
        : "/auth",
      features: ["Unlimited Projects", "Dedicated Support", "Team Management"],
    },
  ];

  return (
    <section id="pricing" className="py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {showTitleAndTabs && (
          <>
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-500 mb-10">Upgrade when you're ready.</p>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {tiers.map((tier, index) => (
            <div key={index} className="border rounded-xl p-6 shadow-md flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
              <p className="text-gray-500 mb-4">{tier.description}</p>
              <p className="text-3xl font-bold mb-6">${tier.price}</p>

              <ul className="mb-6 space-y-2 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={tier.gumroadUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full text-center"
              >
                Subscribe
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
