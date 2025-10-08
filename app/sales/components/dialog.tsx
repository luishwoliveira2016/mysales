'use client'
import { useRef, useState } from "react"
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

import { FaPlus,FaMoneyBill, FaCreditCard } from 'react-icons/fa'
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

import Image from "next/image"



export default function NewSaleDialog() {
      const inputRef = useRef<HTMLInputElement>(null)


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

    const customers = [
        {
            id:1,
            name:'Johann Strauss',
            cpf:'01234567890'
        },
                {
            id:2,
            name:'Michael Jackson',
            cpf:'09876543210'
        }
    ];


    const [selectedProduct, setSelectedProduct] = useState(null);
    const [data, setData] = useState([]);

    const handleAddProduct = (product,quantity) => {
        console.log('aaaaaaaaaaaa qnte', quantity)
        setData((prev) => [...prev, {...product, quantity,total:quantity*parseFloat(product.value)}])
    }

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="default" className="ml-auto bg-blue-800"> + Nova venda</Button>
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
                                    {customers && customers.map((customer) =>(
                                        <SelectItem value={customer.name}>{customer.name}</SelectItem>
                                    ))}
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
                                        <Input id='amount' type="number" defaultValue={1} className="w-12" ref={inputRef}></Input>


                                        <Label>Valor unitário</Label>
                                        <Input value={selectedProduct.value} disabled className="w-24" />
                                    </div>
                                    <Button type='button' onClick={() => handleAddProduct(selectedProduct,inputRef?.current?.value)} className="bg-emerald-400 w-96"> <FaPlus />Adicionar produto</Button>
                                    <ListSaleTable data={data} />
                                </div>
                            }
                        </div>
                    </div>

                    <Label>Método de pagamento</Label>
                    <RadioGroup defaultValue="comfortable" className="flex">
                        <div className="flex items-center gap-3">
                            <Image src="/pix.png" width={30} height={30} alt=""></Image>
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">PIX</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCreditCard size={30}/>
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">Cartão</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMoneyBill size={40}/>
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Dinheiro</Label>
                        </div>
                    </RadioGroup>
                   
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => { setData([]) }}>Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" onSubmit={()=> console.log('submited!')}>Finalizar venda</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}