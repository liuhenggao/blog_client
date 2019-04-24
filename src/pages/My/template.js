import blog from '@/api/blog'
import {mapGetters} from 'vuex'


export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },

  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page }).then(res => {
      this.blogs = res.data
      this.page = res.page
      this.total = res.total
      console.log(this.total)
    })
  },
  computed: {
    ...mapGetters([
      "user"
    ])
  },
  methods: {
    spliteDate(date) {
      let dateObj = ''
      if (typeof date == 'object') {
        dateObj = date
      } else {
        dateObj = new Date(date)
      }
      return {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth() + 1,
        day: dateObj.getDate()
      }
    },

    onPageChange(val){
      blog.getBlogsByUserId(this.user.id,{page: val}).then(res=>{
        console.log(val)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({path: `/my`, query: {page: val}})
      })
    },

    onDelete(blogId){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          return  blog.deleteBlog({blogId})
        }).then(()=>{
            this.$message.success("删除成功！")
            this.blogs = this.blogs.filter(blog=>
              blog.id != blogId
            )
          })
      }
    }
}