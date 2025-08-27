import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"

interface CustomCardProps {
    className?: string;
    title: string;
    content: string;
    footer?: string;
    description?: string;
    action?: string;
    icon?: ReactElement<any, any>
}

export default function CustomCard(props: CustomCardProps) {
    const { className, title, content, footer, description, action, icon } = props;

    return (
        <Card className={className}>
           
                <CardHeader>
                     {icon}
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardAction>{action}</CardAction>
                </CardHeader>
                <CardContent className="font-bold text-2xl">
                    {content}
                </CardContent>
                <CardFooter>
                    <p>{footer}</p>
                </CardFooter>
            
        </Card>
    )
}