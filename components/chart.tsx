"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// export const description = "A multiple bar chart"

const chartData = [
  { month: "Janeiro", vendas: 186, saidas: 80 },
  { month: "Fevereiro", vendas: 305, saidas: 200 },
  { month: "Março", vendas: 237, saidas: 120 },
  { month: "Abril", vendas: 73, saidas: 190 },
  { month: "Maio", vendas: 209, saidas: 130 },
  { month: "Junho", vendas: 214, saidas: 140 },
]

const chartConfig = {
  vendas: {
    label: "Vendas",
    color: "#42A5F5",
  },
  saidas: {
    label: "Saídas",
    color: "#FDE047",
  },
} satisfies ChartConfig

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={400} className=' justify-center'>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="vendas" fill="var(--color-vendas)" radius={4} />
            <Bar dataKey="saidas" fill="var(--color-saidas)" radius={4} />
          </BarChart>
        </ChartContainer>
    </ResponsiveContainer>

  )
}
