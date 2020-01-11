



class POstCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card>
                <CardHeader avatar={<Avatar />} title="Usuário" subheader="Há 15 min" />
                <CardContent>
                    <Typography component="p">{this.props.post.text}</Typography>
                </CardContent>
                <ActionWrapper>
                    <IconButton variant={"contained"}>
                        <ThumbUp 
                            color={this.props.post.likedByMe ? "secondary" :"inherit"}
                        />
                    </IconButton>
                    <IconButton variant={"contained"}>
                        <Share/>
                    </IconButton>
                    <IconButton variant={"contained"}>
                        <Comment/>
                    </IconButton>
                </ActionWrapper>
            </Card>
        )
    }
}
export default PostCard