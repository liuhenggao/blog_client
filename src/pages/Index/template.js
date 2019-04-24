import request from "@/helpers/request"
import auth from "@/api/auth"
import blog from "@/api/blog"
window.request = request
window.auth = auth
window.blog = blog

export default {
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1,
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({page: this.page}).then(res=>{
      console.log(res)
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  },

  methods: {
    onPageChange(val){
      blog.getIndexBlogs({page: val}).then(res=>{
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({path: '/', query: {page: val}})
      })
    }
  }
}
