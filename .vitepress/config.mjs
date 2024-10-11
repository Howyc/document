import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/autoSidebar.js"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档中心",
  description: "A VitePress Site",
  themeConfig: {
    /** 打包项目的根目录 */
    base: "/",
    // logo
    head: [["link", { rel: "icon", href: "/public/logo.svg" }]],
    // 代替标题
    outlineTitle: "文章目录",
    outline: [2, 6],
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: true, // string | boolean
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'Vue', link: '/front-end/vue' },
          { text: 'React', link: '/front-end/react/' },
        ]
      },
      { text: '自动生成侧边栏 vue', link: '/front-end/vue/' },
      { text: '自动生成侧边栏 react', link: '/front-end/react/' },

    ],
    // 根据目录自动生成侧边栏 使用三边栏可以打开此注释
    // 三边栏 : 左侧是全部文件标题导航 中间内容 右侧为 当前文件的内容
    // 双边栏 : 左侧为当前文件标题导航 右侧为当前文件的内容
    // sidebar: {
    //   "/front-end/vue": set_sidebar("/front-end/vue/"),
    //   "/front-end/react": set_sidebar("/front-end/react/")
    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    // 搜索框
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    socialLinks: [
      // 内置的都是国外得 国内的只能通过svg设置
      { icon: 'github', link: 'https://howyc.github.io/document/' },
      {
        icon: {
          svg: '<svg t="1728612501724" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7068" width="200" height="200"><path d="M511.744384 511.744128m-511.744128 0a511.744128 511.744128 0 1 0 1023.488256 0 511.744128 511.744128 0 1 0-1023.488256 0Z" fill="#170B1A" p-id="7069"></path><path d="M512.256128 336.215892c0.511744-53.733133 0-107.978011 0.511744-161.711144h110.024988c-0.511744 9.723138 1.023488 18.934533 2.55872 28.145927l-75.226387 6.140929 6.14093 430.888556c0.511744 18.422789-12.793603 59.874063-22.004998 75.738131-14.328836 24.563718-57.827086 47.08046-86.484757 49.63918-17.911044 1.535232-31.216392-3.070465-47.592204-11.770115-12.281859-6.652674-18.934533-43.498251-22.516742-53.221389 28.145927 15.864068 64.991504 14.328836 92.113943-3.582209 26.098951-16.375812 43.498251-46.568716 43.498251-78.296851-1.023488-94.16092-1.023488-188.321839-1.023488-281.971015z m181.157421-31.216392c15.352324 9.723138 32.751624 17.3993 50.662669 20.981509 10.746627 2.558721 20.981509 3.582209 31.728136 3.582209v29.68116c-31.728136-7.164418-100.301849-27.122439-82.390805-54.244878z" fill="#25F4EE" p-id="7070"></path><path d="M313.699406 442.658671c39.404298-24.563718 87.508246-34.798601 133.565218-28.145927v33.775112c-42.986507 1.023488-78.808596 19.446277-113.607197 45.033483-26.098951 19.446277-44.009995 39.404298-57.827086 69.085458-13.305347 28.145927-18.934533 51.686157-18.422789 82.902548 0 34.286857 9.211394 58.850575 25.587207 89.043479 7.676162 13.817091 22.516742 34.798601 18.934532 50.150924-23.54023-16.375812-42.986507-38.38081-57.315342-62.944528-19.446277-32.751624-29.169415-71.644178-28.145927-110.024987 1.535232-35.310345 11.258371-70.108946 30.192904-100.813593 16.375812-27.634183 39.916042-51.686157 67.03848-68.061969z" fill="#25F4EE" p-id="7071"></path><path d="M543.984264 202.650675h82.390804c12.793603 22.004998 11.770115 30.192904 18.934533 44.009995 11.258371 22.004998 19.958021 30.192904 44.521739 54.756621 1.535232 1.023488 2.558721 2.046977 3.582209 3.582209 21.493253 24.563718 50.662669 41.963018 82.390805 49.127437 18.422789 13.305347 5.629185 67.038481 5.629185 95.696151-53.733133 0.511744-108.489755-20.469765-151.988006-52.197901 0 68.573713 0 132.029985 0.511744 201.115443 0 9.211394 0.511744 17.911044 0 27.634183-2.558721 33.263368-17.911044 81.87906-34.7986 110.536731-14.328836 25.075462-33.775112 47.592204-57.315343 64.991504-30.192904 22.516742-67.038481 34.798601-104.395802 35.822089-18.934533 0.511744-38.38081-0.511744-56.803598-4.605697-26.098951-5.629185-51.174413-31.728136-73.17941-47.080459l-1.535233-1.535233c-10.746627-11.258371-20.469765-24.051974-27.634183-38.380809-16.375812-29.681159-25.587206-63.456272-25.587206-97.743129-0.511744-31.216392 6.14093-62.432784 19.446277-90.578711 13.817091-29.681159 34.286857-56.291854 59.874063-75.73813 34.286857-25.587206 75.738131-40.427786 118.724638-41.451275 11.770115 5.629185 3.582209 92.113943 3.582208 92.113943-13.817091-4.605697-32.23988-3.070465-46.568715 0.511744-17.3993 3.582209-26.610695 13.817091-39.916042 25.075463-8.187906 7.164418-15.352324 14.84058-19.958021 24.563718-8.69965 16.375812-8.187906 18.422789-6.652674 36.845577 2.046977 17.3993 5.117441 36.333833 16.887556 49.63918 7.676162 9.723138 12.793603 24.563718 23.028486 31.216392 8.187906 13.305347 18.934533 23.028486 30.704648 28.657671 16.375812 8.69965 34.798601 12.281859 52.709645 10.746627 28.657671-2.046977 55.268366-19.446277 69.597201-44.521739 9.211394-16.375812 13.305347-37.357321 13.305348-55.268366 0-150.964518 0.511744-437.541229 0.511744-437.541229z" fill="#FFFFFF" p-id="7072"></path><path d="M625.35158 202.650675c9.723138 0.511744 18.934533 0 29.169416 0 0 31.728136 10.234883 63.968016 28.657671 90.066966 2.558721 3.582209 4.605697 6.652674 7.164417 9.211394-20.981509-12.793603-37.357321-32.751624-48.615692-54.756621-7.164418-13.305347-12.793603-28.657671-16.375812-44.521739z m150.452774 151.476262c10.746627 2.558721 20.981509 3.582209 31.728136 3.582208v111.048476c-54.244878 0.511744-108.489755-17.3993-153.011494-49.63918v220.561719c0.511744 16.887556-1.023488 33.263368-4.605698 49.63918-10.746627 49.63918-39.404298 93.649175-80.855572 123.330335-22.004998 15.864068-46.568716 26.610695-72.667666 32.23988-31.728136 7.164418-64.47976 6.652674-95.184408-1.535232-36.845577-9.723138-71.644178-30.192904-97.231384-58.338831 22.004998 15.864068 47.08046 26.098951 73.691154 31.728136 18.422789 4.093953 37.869065 5.117441 56.803598 4.605697 37.357321-1.023488 74.202899-13.305347 104.395803-35.822089 23.54023-17.3993 42.474763-39.404298 57.315342-64.991504 16.887556-29.169415 27.122439-61.921039 29.681159-95.184408 0.511744-9.211394 0.511744-17.911044 0-27.634183-1.023488-68.061969-1.023488-136.635682-1.023488-205.209395 44.009995 31.728136 97.743128 48.615692 151.476262 48.103948-0.511744-28.657671 0-57.827086-0.511744-86.484757z" fill="#FE2C55" p-id="7073"></path><path d="M447.264624 440.09995c10.746627 0 22.004998 0.511744 32.23988 2.046977v114.11894c-15.352324-5.117441-32.23988-5.629185-48.103948-2.046976-30.192904 6.652674-55.268366 29.681159-66.014993 58.850574-10.746627 28.657671-6.652674 62.432784 11.258371 86.996502-10.746627-6.14093-19.446277-14.328836-27.122439-24.051974-11.258371-13.305347-18.934533-30.704648-20.981509-48.103948-2.046977-17.911044 1.023488-37.357321 9.723138-53.221389 4.605697-9.723138 11.770115-17.911044 19.958021-25.075463 13.305347-11.258371 30.192904-18.422789 46.568716-23.028485 13.817091-3.070465 28.657671-3.582209 41.963019 1.023488 0.511744-4.605697 0.511744-76.249875 0.511744-87.508246z" fill="#FE2C55" p-id="7074"></path></svg>'
        },
        link: 'https://www.douyin.com/'
      }
    ],
    footer: {
      copyright: 'Copyright © 2024-present ZhouJH'
    }
  }
})
