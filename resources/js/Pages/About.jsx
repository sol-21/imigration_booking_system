import CustomerLayout from "@/Layouts/CustomerLayout";
import { Head } from "@inertiajs/react";

function About({ auth }) {
    return (
        <>
            <CustomerLayout auth={auth}>
                <Head>
                    <title>Your page title</title>
                    <meta name="description" content="Your page description" />
                </Head>
                <div className="d-flex justify-content-center align-items-center">
                    <div className=" w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <div>
                            <p>About</p>
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Unde illo dicta consequatur architecto? Qui
                            mollitia dolor minima. Culpa voluptates harum
                            dolorem quod quis necessitatibus esse sequi voluptas
                            cupiditate ipsa sapiente assumenda libero
                            perferendis facere totam provident molestiae,
                            inventore exercitationem facilis? Vel hic quo ab
                            ipsum id assumenda? Sint distinctio vero, at ad
                            accusamus eius doloribus consequuntur ex fugit
                            praesentium amet facere quos voluptate aliquam harum
                            unde provident sequi dicta dolorem delectus incidunt
                            modi quas odio. Velit fugiat possimus magnam
                            molestiae odio exercitationem, totam praesentium
                            temporibus aut tenetur officia nisi dolorem. Animi
                            vero fugiat aliquid quidem recusandae mollitia eius
                            atque repellat.
                        </div>
                    </div>
                </div>
            </CustomerLayout>
        </>
    );
}

export default About;
