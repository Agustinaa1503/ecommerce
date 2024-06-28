import Container from "@/components/shared/container";
// import NotFound from "../shop/category/not-found";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex justify-center">
            <Container>
            <div className="w-full sm:[350px] px-10">
            { children }
            </div>
            </Container>
        </main>
    )    
}