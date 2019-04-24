import blog from '@/api/blog'
import marked from 'marked'

export default {
  data () {
    return {
      user: {},
      title: '',
      description: '',
      time: '',
      rowContent: ''
    }
  },
  created(){
    blog.getDetail({blogId: this.$route.params.blogId}).then(res=>{
      console.log(res)
      this.user = res.data.user
      this.title = res.data.title
      this.rowContent = res.data.content
      this.description = res.data.description
      this.time = res.data.createdAt
    })
  },
  computed: {
    markdown(){
      return marked(this.rowContent)
    }
  }
}
