import { posts } from '@/app/data/posts';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');
    const post = posts.find((p) => p.id === parseInt(postId));
    return NextResponse.json(post.comments);
}

export async function POST(request) {
    const { postId, text, author, parentId } = await request.json();
    const post = posts.find((p) => p.id === parseInt(postId));

    const newComment = {
        id: Date.now(),
        text,
        author,
        likes: 0,
        replies: [],
    };

    if (parentId) {
        const findParentAndAddReply = (comments) => {
            for (const comment of comments) {
                if (comment.id === parentId) {
                    comment.replies.push(newComment);
                    return true;
                }
                if (comment.replies && comment.replies.length > 0) {
                    if (findParentAndAddReply(comment.replies)) {
                        return true;
                    }
                }
            }
            return false;
        };
        findParentAndAddReply(post.comments);
    } else {
        post.comments.push(newComment);
    }

    return NextResponse.json(newComment);
}
