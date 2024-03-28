const About = () => {
    return (
        <div className='mt-2 md:mt-3 mx-auto w-10/12 mb-8'>
            <h2 className='text-center text-4xl font-black mb-4'>About Us</h2>
            <p className='text-base text-[#131313B3]'>Welcome to Reviewer's Retreat, your ultimate destination for insightful book reviews and literary discussions. At Reviewer's Retreat, we are passionate about literature and committed to providing readers with comprehensive and unbiased reviews that help you discover your next great read.</p>
            <div className='mb-8'>
                <h2 className='text-center text-3xl font-bold mt-6 mb-3'>Our Goal</h2>
                <p className='font-bold mb-2'>At Reviewer's Retreat, our goal is simple: to foster a community of avid readers and book enthusiasts who share a love for literature. We aim to:</p>
                <ul className='text-base text-[#131313B3]'>
                    <li className='list-disc'>Provide Honest and Thoughtful Reviews: We believe in offering honest and unbiased reviews of a wide range of books across various genres. Our reviews are meticulously crafted to provide readers with valuable insights into the themes, characters, and overall reading experience.</li>
                    <li className='list-disc'>
                        Promote Literary Diversity: We celebrate diversity in literature and strive to showcase books from diverse authors, perspectives, and genres. Whether you're interested in classics, contemporary fiction, mysteries, or memoirs, Reviewer's Retreat has something for everyone.
                    </li>
                    <li className='list-disc'>
                        Encourage Meaningful Discussions: We understand the joy of discussing books and exchanging ideas with fellow readers. Through our platform, we encourage vibrant discussions, book recommendations, and interactions that enhance the reading experience for all.

                    </li>
                    <li className='list-disc'>
                        Support Emerging Authors: We are committed to supporting emerging authors and independent publishers by highlighting their works and providing them with a platform to reach a wider audience. We believe in nurturing talent and fostering a supportive community for aspiring writers.
                    </li>
                    <li className='list-disc'>
                        Inspire a Lifelong Love for Reading: Above all, Reviewer's Retreat is dedicated to inspiring a lifelong love for reading. We believe in the transformative power of books and their ability to enrich our lives, broaden our perspectives, and ignite our imaginations.
                    </li>
                </ul>
            </div>
            {/* subscirbe section */}
            <div className='text-center'>
                <div className="join">
                    <input className="input input-bordered join-item" placeholder="Subscribe with email" />
                    <button className="btn join-item rounded-r-full bg-green-600 text-white">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default About;