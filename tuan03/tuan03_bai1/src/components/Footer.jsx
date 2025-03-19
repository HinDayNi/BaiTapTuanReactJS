import img_Chefify from '../assets/Screenshot 2025-03-10 112430.png'
export default function Footer(){

const Recipces =['What to Cook This Week','Pasta','Dinner','Healthy','Vegetarian','Vegan','Christmas']
const LearnMore = ['Our cooks','See Our Features','FAQ']
const Shop = ['Gift Subscription','Send Us Feedback']

    return(
        <footer className='bg-gray-900 text-white grid grid-cols-8 gap-6 !w-full'>
            <div className='text-left col-span-4 space-y-4'>
                <div className='text-white justify-start p-3 space-y-4'>
                    <h3>About Us</h3>
                    <p>Welcome to or website, a wonderful place explore and learn how to cook like a pro.</p>
                    <div className='flex'>
                        <input type="text" placeholder="Enter your email" className='p-2 rounded w-full text-black bg-gray-100 focus:outline-none'/>
                        <button className='!bg-pink-600 text-white font-medium px-4 py-2 ml-2 rounded hover:bg-pink-700'>Send</button>
                    </div>
                </div>
                <div className="flex text-white text-left">
                    <img src={img_Chefify} alt="Chef Hat" className='w-15 h-15 p-3'/>
                    
                    <p>2023 Chefify Company</p>
                    <p>Terms of Service Privacy Poilicy</p>
                </div>
            </div>
            <div className="col-span-2 gap-2 grid grid-rows-2 justify-center text-white text-left">
                
                <div className='justify-center row-span-1'>
                    <ul>
                        <h3 ><b>Learn More</b></h3>
                        {LearnMore.map((item,index) => (
                            <li key={index} >{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='justify-center row-span-1'>
                    <ul>
                        <h3><b>Shop</b></h3>
                        {Shop.map((item,index) => (
                            <li key={index} >{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='col-span-2 gap-2 justify-end text-white text-left'>
                <ul>
                    <h3><b>Recipces</b></h3>
                    {Recipces.map((index,item) =>
                        (
                            <li key={item}>{index}</li>
                        )
                    )}
                </ul>
            </div>
        </footer>
    )
}