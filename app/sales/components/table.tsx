import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { log } from "console"
import { useEffect, useState } from "react"

export default function ListSaleTable(data : any[]) {

    console.log('fataaaa vindo da outra func', data)

    const [values,setValues] = useState(data.data)

        const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        }, {
            invoice: "INV005",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        }, {
            invoice: "INV007",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        }]

        useEffect(()=>{
            setValues((prev)=>[...prev, data.data])

            console.log('valueeeeeeeeeeeeeeeeeeeessssssssss',values)
            console.log('data estado', data)
        },[data])

    return (
        <Table className=" rounded-4xl border">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-screen">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {values?.length && values.map((sale,index) => (
                    <TableRow key={index} onClick={() => {
                        console.log('click on :', sale)
                    }}>
                        <TableCell className="font-medium">{sale.description}</TableCell>
                        <TableCell>{sale.value}</TableCell>
                        <TableCell>{sale?.paymentMethod}</TableCell>
                        <TableCell className="text-right">{sale?.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}