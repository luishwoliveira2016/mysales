'use client'


import CustomCard from "@/components/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import NewSaleDialog from "./components/dialog"
import { MdAttachMoney } from "react-icons/md"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    customer:"Jim Carrey",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV008",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV009",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV010",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV011",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV012",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV0013",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV0014",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },

]

export default function Sales() {
  return (
    <div>
      <h1 className="font-bold font-sans">Vendas</h1>
      <div className="flex mb-8">
        <CustomCard className="w-[40%] h-48 bg-emerald-400 mr-24"
            content='R$ 5.000,00'
            title='Vendas totais'
            icon={<MdAttachMoney size={46} />}
          />
          <NewSaleDialog/>
      </div>
          
  <Table className="border border-r rounded-4xl border-separate border-spacing-0 overflow-hidden  p-6">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="bg-slate-700">
          <TableRow >
            <TableHead className="text-white">ID</TableHead>
            <TableHead className="w-screen text-white">Cliente</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Método de pagamento</TableHead>
            <TableHead className="text-right text-white">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} onClick={() => {
              console.log('click on :', invoice)
            }}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

     
    </div>
  )
}
