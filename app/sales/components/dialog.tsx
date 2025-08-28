import { useState } from "react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectValue
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



export default function NewSaleDialog() {
    const [selectedProduct, setSelectedProduct] = useState('');

   const invoices =  [
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
  },  {
    invoice: "INV005",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },  {
    invoice: "INV007",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  }]

    console.log('selectted producr', selectedProduct)
    
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="default" className="ml-auto">Nova venda</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Nova venda</DialogTitle>
                        <DialogDescription>
                            Inserir nova venda, escolha o cliente e os produtos desejados.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">

                        <Label htmlFor="name-1">Selecionar cliente</Label>
                        <Select >
                            <SelectTrigger className={"w-full"}>
                                <SelectValue placeholder="Select a value" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value={"aaaa"}>Johann Strauss</SelectItem>
                                    <SelectItem value={'bbbbb'}>Airton Senna</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Adicionar produto</Label>
                            <Select onValueChange={(value) => {
                                setSelectedProduct(value);
                                }}>
                                <SelectTrigger className={"w-full"}>
                                    <SelectValue placeholder="Select a value" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value={"Anel grande"}>Anel Grande xls</SelectItem>
                                        <SelectItem value={'Pingente kids'}>Pingente Kids Menina</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                         {
                            selectedProduct && 
                            <div className="grid gap-3">
                                <Label>ID</Label>
                                <Input value={selectedProduct} disabled/>


                                <div className="flex gap-4">
                                    <Label>Descrição</Label>
                                <Input value={selectedProduct} disabled/>


                                <Label>Valor unitário</Label>
                                <Input value={selectedProduct} disabled className="w-8"/>
                                </div>
                                

                                <Label>Quantidade</Label>
                                <Input type="number" defaultValue={1}></Input>
                                
                                <Button>Adicionar a lista</Button>

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
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice} onClick={() => {
                                    console.log('click on :', invoice)
                                    }}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
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

                            </div>
                        }
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={()=>setSelectedProduct('')}>Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">Finalizar venda</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}