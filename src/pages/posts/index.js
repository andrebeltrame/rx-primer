import React from 'react'
import Card from '../../components/ui/Card'
import PostItem from '../../components/PostListItem'
import { Button } from '../../components/ui/Buttons'

export default function PostsPage() {
    return (
        <>
            <Card className="no-border">

                <div className="grid-row">
                    <h2>Publicações</h2>

                    <Button className="btn ButtonMd ColorSecundary mt-2">
                        Novo Post
                    </Button>
                </div>
                
                
                <PostItem/>

            </Card>
        </>
    )
}
