import { FaArrowRightLong } from "react-icons/fa6";
const StudyFeature = () => {
    return (
        <div className="my-16">
            <h3 className="text-center text-2xl text-[#3939c8] md:text-3xl font-semibold mt-5 dark:text-white">Study Feature</h3>
            <p className="text-center mb-5 dark:text-white">There are so many reasons to choose Study, here are a few items: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="space-y-3 dark:text-white">
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> From Shakespeare to Modernism</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Academic Writing and Research Methodology</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Language Structure and Function</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Creative Writing and Storytelling</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Comparative Literature and Translation Studies</p>
                </div>
                <div className="space-y-3 dark:text-white">
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Educational Psychology and Child Development</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Curriculum Design and Assessment</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Special Education and Inclusive Teaching</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Pedagogy and Classroom Management</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Educational Leadership and Administration</p>
                </div>
                <div className="space-y-3 dark:text-white">
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> From Shakespeare to Modernism</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Academic Writing and Research Methodology</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Linguistics: Language Structure and Function</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Creative Writing and Storytelling</p>
                    <p className="flex items-center gap-2 uppercase"><FaArrowRightLong /> Comparative Literature and Translation Studies</p>
                </div>
            </div>
        </div>
    );
};

export default StudyFeature;