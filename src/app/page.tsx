"use client"
import Image from 'next/image'
import { Card, Text, Metric } from "@tremor/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
      <Card></Card>
      <Card className="max-w-xs mx-auto">
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>
    </main>
  )
}
