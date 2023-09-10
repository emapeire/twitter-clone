'use client'

import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import Link from "next/link";
import { IconMessageCircle, IconRepeat, IconHeart } from '@tabler/icons-react'

export default function PostCard({
  name,
  username,
  avatar,
  content
}: {
  name: string
  username: string
  avatar: string
  content: string
}) {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${username}`}>
            <Avatar radius="full" size="md" src={avatar} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-600">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className="w-4 h4" />
        </button>
        <button>
          <IconRepeat className="w-4 h4" />
        </button>
        <button>
          <IconHeart className="w-4 h4" />
        </button>
      </CardFooter>
    </Card>
  );
}
