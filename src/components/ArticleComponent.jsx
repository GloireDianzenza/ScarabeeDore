import React from 'react';
import { Button } from 'react-bootstrap';

function ArticleComponent({article}) {
    return (<Button href={`/article/${article.id}`}>
        <div className="inner-blog">
                        {article.image !== "" && <img src={require(`../Assets/${article.image}`)} alt=''/>}
                        <div>
                            <p>{article.dateEnvoi}</p>
                            <p>{article.tpsLecture} minutes de lecture</p>
                        </div>
                        <p className='subtitle'>{article.categorie}</p>
                        <h3>{article.titre}</h3>
                    </div>
    </Button>);
}

export default ArticleComponent;