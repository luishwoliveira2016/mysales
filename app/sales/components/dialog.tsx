'use client'
import { use, useState } from "react"
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

import ListSaleTable from './table'

import { FaPlus } from 'react-icons/fa'
import { log } from "console"


export default function NewSaleDialog() {
    const products = [
        {
            id: 1,
            description: 'anel xs',
            code: '174',
            value: '174,90'
        },
        {
            id: 2,
            description: 'anel aaaaa  xs',
            code: '199',
            value: '199,90'
        }
    ];


    const [selectedProduct, setSelectedProduct] = useState({});
    //const [faturas, setFaturas] = useState(invoices)

    const [data, setData] = useState([]);

    const handleAddProduct = (product) => {
        console.log('dataaaaa',data)
        console.log('producttttt',product)
        setData((prev) => [...prev, product])
    }

    console.log('selectted producr', selectedProduct)

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="default" className="ml-auto">Nova venda</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px]">
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
                                console.log(value)
                                setSelectedProduct(products[value]);
                            }}>
                                <SelectTrigger className={"w-full"}>
                                    <SelectValue placeholder="Select a value" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {products.map((product, index) => (
                                            <SelectItem value={index} key={product.id}>{product.description}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {
                                selectedProduct &&
                                <div className="grid gap-3">
                                    <div className="flex gap-4">
                                        <Label>Id</Label>
                                        <Input value={selectedProduct.code} disabled className="w-16" />


                                        <Label>Descrição</Label>
                                        <Input value={selectedProduct.description} className="w-72" disabled />

                                        <Label>Quantidade</Label>
                                        <Input type="number" defaultValue={1} className="w-12"></Input>


                                        <Label>Valor unitário</Label>
                                        <Input value={selectedProduct.value} disabled className="w-24" />
                                    </div>


                                   
                                    <Button onClick={()=>handleAddProduct(selectedProduct)} className="bg-emerald-400 w-96"> <FaPlus/>Adicionar produto</Button>
                                    <ListSaleTable data={data} />
                                </div>
                            }
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => setSelectedProduct('')}>Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">Finalizar venda</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}