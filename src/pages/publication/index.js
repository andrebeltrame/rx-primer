import React from 'react'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'

const ArticleItem = props => {

  const [articleName, setArticleName] = React.useState('');
    return (
        <>
            <Card className="no-border">
                 <Input
                  value={articleName}
                  onChange={(event) => setArticleName(event.target.value)}
                  setValue={articleName}
                  label="Nome do artigo"
                  type="text"
                  required
                />
            </Card>
        </>
    )
}

export default ArticleItem
