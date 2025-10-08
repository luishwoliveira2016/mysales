import CustomCard from '@/components/card'
import { FaShoppingCart, FaArrowCircleDown, FaChartLine, FaListUl, FaChartBar } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

import Chart from "@/components/chart"
import DataTable from '@/components/table';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <>
      <h1>MY SALES</h1>

      <div className='flex flex-wrap gap-4 justify-center h-full'>
        <div className="flex gap-2 w-full">
          <CustomCard
            title="Total de vendas"
            content='R$ 50,00'
            action={
              <Badge variant="outline" className='bg-slate-500 border-none'>
                <FaChartLine />
                -20%
              </Badge>}
            description='Soma total de todas as vendas registradas'
            className='w-full bg-blue-400'
            icon={<FaShoppingCart size={46} />}

          />

          <CustomCard
            title="Vendas de hoje"
            content='R$ 1250,00'
            action={
              <Badge variant="outline" className='bg-slate-500 border-none'>
                <FaChartLine />
                -20%
              </Badge>}
            description='Soma total das vendas do dia de hoje'
            className="w-full bg-emerald-400"
            icon={<MdAttachMoney size={46} />}
          />

          <CustomCard
            title="Saidas de hoje"
            content='R$100,00'
            action={
              <Badge variant="outline" className='bg-slate-500 border-none'>
                <FaChartLine />
                -20%
              </Badge>}
            description='Soma total do valor das saídas no dia de hoje'
            className='w-full bg-red-400'
            icon={<FaArrowCircleDown size={46} />}
          />


          <CustomCard
            title="Lucro positivo de hoje"
            content='R$20,00'
            action={
              <Badge variant="outline" className='bg-slate-500 border-none'>
                <FaChartLine />
                -20%
              </Badge>}
            description='Soma total do lucro obtido do dia de hoje'
            className='w-full  bg-yellow-200'
            icon={<FaChartLine size={46} />}
          />

        </div>
        <div className='flex w-full gap-3'>
          <CustomCard
            title="Últimas vendas"
            content={<DataTable />}
            description='Útlimas 10 vendas realizas'
            className='w-[50%] ml-auto mt-3 h-full'
          />
          <CustomCard
            title="Vendas mensais"
            content={<Chart />}
            description='Total de vendas x total de saída mensal'
            className='w-[50%] mt-3 h-full mr-auto'
          />
        </div>  
      </div>
    </>

  );
}