export default function formatProductPrice(value: string) {
    return Number(value).toLocaleString("pt-br", { style: 'currency', currency: 'brl' })
}