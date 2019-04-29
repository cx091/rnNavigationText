export default class NavigationUtil {
    /**
     * 重置到首页
     * @params params
     */
    static resetToHomePage(params){
        const { navigation } = params;
        navigation.navigate("Main");
    }
     /**
     * 返回上一页
     * @params navigation
     */
    static goBack(navigation){
        navigation.goBack();

    }
    /**
     * 跳去
     * @params params 要传递的参数
     * @params page 要跳转的页面
     */
    static goPage(params,page){
        const { navigation } = NavigationUtil;
        if(!navigation)return
        
        navigation.navigate(
            page,
            {
             ...params
            }
            );

    }
}