import prs1 from "../assets/prsnal1.jpeg"
import prs2 from "../assets/prsnal2.jpeg"
import prs3 from "../assets/prsnal3.jpeg"
import PdfDownloader from "./PdfDownloader"

const CourseCardData = [
    {
      imgsrc: prs1,
      title: "Master Data Structures and Algorithms using Java",
      text: "First of its kind, our Java online course for beginners is a uniquely designed online course in Data Structures and Algorithms to aid your journey right from the beginning to the very end in becoming the most skilled software engineers across the globe. Our online course in Java is not only in absolute coherence with our most sought after classroom program, but also provides you the comfort of learning at your home. With over 300 video lectures and several practice problems. Through these online classes, the students will not only become more efficient with their solutions by optimizing space and time but this course will also provide them a firm base to excel in all their programming interviews. The core focus of these Java classes for beginners is to maintain an equilibrium between theory and practical, thus providing the programmers with an ample amount of practice of questions based on Sorting, Searching, Greedy Algorithms, Divide and Conquer Algorithms, Dynamic Programming along with a comprehensive revision of data structures like linked-lists, Trees, Graphs, Heaps, Hashing etc. The user can opt for the complete bundle, or just the advanced part of the course.",
      view: "https://youtu.be/_afGoen6qg0",
      syllabus: <PdfDownloader src="src/assets/javasyllabus.pdf" btnText="syllabus"  filename="javasyallubus.pdf" />
    },
    {
        imgsrc: prs2,
        title: "Master Full stack Web development with node.Js(MERN)",
        text: "The online course for Web Development by Pawan Parashar is deftly designed with an aim to familiarize the young coders with all the know-how of developing the most coherent and professional websites & web-portals. This online Web Development course is a project-based Full Stack web development course with backend in Node.JS. As a part of these online Web Development classes, the students will start off with the fundamentals of building basic websites and will go on to create more functional and complex portals. The course will start with topics such as HTML, CSS, and JS and then move on to important concepts such as version control, databases, Node.Js and advanced topics such as security. Throughout the course, the students will be mentored in a manner that they develop proficiency with javascript for both Front-end as well as back-end use-cases. By the end of this online Web Development training, the students should be equipped with all the essentials to bring into play their full-fledged live web projects such as e-commerce website. Anyone with a good command of data structures like Stacks, Queues, and Lists, basics of algorithms like sorting, searching, string manipulations and OOP(s) is good to go!",
        view: "https://youtu.be/_afGoen6qg0",
        syllabus: <PdfDownloader src="src/assets/javasyllabus.pdf" btnText="syllabus"  filename="javasyallubus.pdf" />
      },
      {
        imgsrc: prs3,
        title: "Master Data Structures and Algorithms using Python",
        text: "This is the most fundamental course in Python designed for beginners. Python has now become one of the hottest and most sought-after programming languages and it can kickstart your Python programming skills from zero to hero. The course is going to encompass concepts like writing simple programs in Python, built-in Data Structures and learning program execution techniques like Multithreading & Multiprocessing. Python is extensively used in domains such as Big Data, Data Visualization, Machine Learning, Deep Learning, Artificial Intelligence, etc. Our Python experts,Raghav Dalmia, are the guiding instructors for the Python course. Python is used extensively in the software development industry as well in Data Science. Popular Web Apps like Youtube & Instagram are built in Python. To acquire advanced skills in Python, we advise the keen learners to further opt for the next and advanced level- Python for Data Science or Python for Developers.",
        view: "https://youtu.be/_afGoen6qg0",
        syllabus: <PdfDownloader src="src/assets/javasyllabus.pdf" btnText="syllabus"  filename="javasyallubus.pdf" />
      }
];

export default CourseCardData;