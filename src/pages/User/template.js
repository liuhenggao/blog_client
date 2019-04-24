import blog from '@/api/blog'

export default {
  data() {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    }
  },

  created() {
    this.page = parseInt(this.$route.query.page) || 1
    this.userId = this.$route.params.userId
    blog.getBlogsByUserId(this.userId, { page: this.page }).then(res => {
      console.log(res.data)
      this.blogs = res.data
      this.page = res.page
      this.total = res.total
      if (res.data.length > 0) {
        this.user = res.data[0].user
      }
    })
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
      blog.getBlogsByUserId(this.userId,{page: val}).then(res=>{
        console.log(val)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({path: `/user/${this.userId}`, query: {page: val}})
      })
    }
  }
}
