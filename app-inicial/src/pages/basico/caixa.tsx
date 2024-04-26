import Caixa from "@/components/basico/Caixa";

export default function PaginaCaixa() {

    return (
        <div className="flex gap-7 p-2">
            <Caixa>One</Caixa>
            <Caixa>Two</Caixa>
            <Caixa>Three</Caixa>
            <Caixa>
                <ul className="list-disc">
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                </ul>
            </Caixa>
        </div>
    )
    
}