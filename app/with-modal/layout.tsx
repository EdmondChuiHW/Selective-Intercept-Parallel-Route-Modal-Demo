export default function WithModalLayout({modal, children}) {
    return (
        <>
        {children}
        {modal}
        </>
    );
}