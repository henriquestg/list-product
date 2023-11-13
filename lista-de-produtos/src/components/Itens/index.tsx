import "./styles.scss"

interface TextProps {
    productDescription: string;
    numberStock: string;

}

export function Itens ({productDescription, numberStock}: TextProps ) {
    return (
        <div className="itens-container">
            <div className="number-stock"><p>{numberStock}</p></div>
            <p>{productDescription}</p>
        </div>
    );
}