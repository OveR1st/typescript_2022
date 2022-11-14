/**
 * "topicId": 5,
	"status": "published" // "draft", "deleted"
 */

/**
     * {
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
     */
enum QuestionStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}

interface IReq {
  topicId: number;
  status?: QuestionStatus;
}

interface IRes {
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestionStatus;
}

let req: IReq = { topicId: 5 };

async function getFaqs(req: IReq): Promise<IRes[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}

getFaqs(req);
