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

export default function ListSaleTable({ data }: { data: any[] }) {

    console.log('fataaaa vindo da outra func', data)

    const [values, setValues] = useState([])

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

    return (
        <Table className=" rounded-4xl border">
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead className="w-screen">Descrição</TableHead>
                    <TableHead className="text-right">Quantidade</TableHead>
                    <TableHead>Valor unitário</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.length && data.map((sale, index) => (
                    <TableRow key={index} onClick={() => {
                        console.log('click on :', sale)
                    }}>
                        <TableCell className="font-medium">{sale.id}</TableCell>
                        <TableCell className="font-medium">{sale.description}</TableCell>
                        <TableCell className="text-right">{sale?.quantity}1</TableCell>
                        <TableCell itemType="currency">{sale.value}</TableCell>
                        <TableCell>{sale?.paymentMethod}</TableCell>
                        <TableCell className="text-right">{sale?.value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>Total</TableCell>
                    <TableCell className="text-right">
                        { data.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.value),0)}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}