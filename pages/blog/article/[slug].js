import Link from "next/link";
import { useRouter } from "next/router";
export default function Article(props) {
  const router = useRouter();
  const {slug} =  router.query;
  
  console.log('====================================');
  console.log(props,'props');
  console.log('====================================');


  return (
    <div>Article {slug}
        <Link href="/">
              Home
        </Link>

    </div>
  )
}
