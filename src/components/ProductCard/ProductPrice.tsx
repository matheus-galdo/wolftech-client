export default function formatProductPrice(value: string | null | undefined) {
    if (!value) {
        return '';
    }
    return Number(value).toLocaleString("pt-br", { style: 'currency', currency: 'brl' });
}