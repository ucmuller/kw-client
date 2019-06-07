<template>
    <div class="table__container">
        UserParent
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>user_master_id</th>
                <th>sex_id</th>
                <th>icon</th>
                <th>full_name</th>
                <th>full_kana</th>
                <th>tel</th>
                <th>zip_code1</th>
                <th>zip_code2</th>
                <th>state</th>
                <th>city</th>
                <th>address1</th>
                <th>address2</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>user_master_id</th>
                <th>sex_id</th>
                <th>icon</th>
                <th>full_name</th>
                <th>full_kana</th>
                <th>tel</th>
                <th>zip_code1</th>
                <th>zip_code2</th>
                <th>state</th>
                <th>city</th>
                <th>address1</th>
                <th>address2</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td><a href="">https://aws.s3...</a></td>
                <td>田中又暉</td>
                <td>たなかゆうき</td>
                <td>090-8016-4826</td>
                <td>115</td>
                <td>0051</td>
                <td>東京都</td>
                <td>北区</td>
                <td>浮間</td>
                <td>4-19-9</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <a href=""><button class="button">詳細</button></a>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>1</td>
                <td><a href="">https://aws.s3...</a></td>
                <td>田中又暉</td>
                <td>たなかゆうき</td>
                <td>090-8016-4826</td>
                <td>115</td>
                <td>0051</td>
                <td>東京都</td>
                <td>北区</td>
                <td>浮間</td>
                <td>4-19-9</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>

        UserChild
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>sex_id</th>
                <th>icon</th>
                <th>first_kana</th>
                <th>last_kana</th>
                <th>birth_day</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>sex_id</th>
                <th>icon</th>
                <th>first_kana</th>
                <th>last_kana</th>
                <th>birth_day</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td><a href="">https://aws.s3...</a></td>
                <td>たなか</td>
                <td>ゆうき</td>
                <td>1997-09-09 00:00:00</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>1</td>
                <td><a href="">https://aws.s3...</a></td>
                <td>けんいちろう</td>
                <td>こまちゅ</td>
                <td>1989-05-17 00:00:00</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>

        UserMaster, SchoolAdminMaster, CompanyAdminMaster
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>1</td>
                <td>aliquam.apple@icloud.com</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>komatsu@gmail.com</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>

        Book
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>child_parent_id</th>
                <th>event_detail_id</th>
                <th>status</th>
                <th>price</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>child_parent_id</th>
                <th>event_detail_id</th>
                <th>status</th>
                <th>price</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>52b9f444-4712-3896-9f39-c093ecd001d5</td>
                <td>8</td>
                <td>99c1ed30-76f8-11e9-bc42-8f8fbdeab965</td>
                <td>10</td>
                <td>2000</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>52b9f444-4712-3896-9f39-c093ecd001d5</td>
                <td>12</td>
                <td>99c1ed30-76f8-11e9-bc42-8f8fbdeab965</td>
                <td>10</td>
                <td>2000</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>

        EventMaster
        <table class="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>school_master_id</th>
                    <th>category_master_id</th>
                    <th>title</th>
                    <th>detail</th>
                    <th>created_at</th>
                    <th>updated_at</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>id</th>
                    <th>school_master_id</th>
                    <th>category_master_id</th>
                    <th>title</th>
                    <th>detail</th>
                    <th>created_at</th>
                    <th>updated_at</th>
                </tr>
            </tfoot>
            <tbody>
                <tr>
                    <td>99c1ed30-76f8-11e9-bc42-8f8fbdeab965</td>
                    <td>99a31340-76f8-11e9-ae56-c1f9b2700eb2</td>
                    <td>1</td>
                    <td>たなかの教え</td>
                    <td>プログラミングに大事なことをみっちり教えます</td>
                    <td>2019-04-19 10:00:00</td>
                    <td>2019-05-19 10:00:00</td>
                </tr>
                <tr>
                    <td>99c2d1f0-76f8-11e9-b694-bf35bc45fa48</td>
                    <td>99a5cad0-76f8-11e9-b0ca-15c3c8dbbc25</td>
                    <td>2</td>
                    <td>こまつの教え</td>
                    <td>自分の感性をどう使うか。山梨で開催。</td>
                    <td>2019-04-19 10:00:00</td>
                    <td>2019-05-19 10:00:00</td>
                </tr>
            </tbody>
        </table>

        EventPr
        <table class="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>pr</th>
                    <th>created_at</th>
                    <th>updated_at</th>
                    <th>action</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>id</th>
                    <th>pr</th>
                    <th>created_at</th>
                    <th>updated_at</th>
                    <th>action</th>
                </tr>
            </tfoot>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>星150以上！絶賛の英会話体験！</td>
                    <td>2019-04-19 10:00:00</td>
                    <td>2019-05-19 10:00:00</td>
                    <td class="td-expand">
                        <button class="button">詳細</button>
                        <button class="button is-primary">更新</button>
                        <button class="button is-danger">削除</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>星150以上！絶賛の英会話体験！</td>
                    <td>2019-04-19 10:00:00</td>
                    <td>2019-05-19 10:00:00</td>
                    <td class="td-expand">
                        <button class="button">詳細</button>
                        <button class="button is-primary">更新</button>
                        <button class="button is-danger">削除</button>
                    </td>
                </tr>
            </tbody>
        </table>

        Sex
        <table class="table is-striped">
            <thead>
            <tr>
                <th>id</th>
                <th>index</th>
                <th>name</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>index</th>
                <th>name</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>not_known</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>1</td>
                <td>male</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td>female</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>9</td>
                <td>not_applicable</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>

        Tag
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>1</td>
                <td>駅チカ！</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>付き添いなし！</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>付き添い有り</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>美容室コラボ！</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>

        CompanyMaster, SchoolMaster
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>detail</th>
                <th>email</th>
                <th>url</th>
                <th>tel</th>
                <th>icon</th>
                <th>zip_code1</th>
                <th>zip_code2</th>
                <th>state</th>
                <th>city</th>
                <th>address1</th>
                <th>address2</th>
                <th>longitude</th>
                <th>latitude</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>detail</th>
                <th>email</th>
                <th>url</th>
                <th>tel</th>
                <th>icon</th>
                <th>zip_code1</th>
                <th>zip_code2</th>
                <th>state</th>
                <th>city</th>
                <th>address1</th>
                <th>address2</th>
                <th>longitude</th>
                <th>latitude</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>1</td>
                <td>キッズシーズ株式会社</td>
                <td>子育てインフラ企業</td>
                <td>info.supporter@kidsseeds.co.jp</td>
                <td><a href="">https://aws.s3...</a></td>
                <td><a href="">090-xxxx-xxxx</a></td>
                <td><a href="">https://aws.s3...</a></td>
                <td>115</td>
                <td>0051</td>
                <td>東京都</td>
                <td>北区</td>
                <td>浮間</td>
                <td>4-19-9</td>
                <td>39.04</td>
                <td>23</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>キッズシーズ株式会社</td>
                <td>子育てインフラ企業</td>
                <td>info.supporter@kidsseeds.co.jp</td>
                <td><a href="">https://aws.s3...</a></td>
                <td><a href="">090-xxxx-xxxx</a></td>
                <td><a href="">https://aws.s3...</a></td>
                <td>115</td>
                <td>0051</td>
                <td>東京都</td>
                <td>北区</td>
                <td>浮間</td>
                <td>4-19-9</td>
                <td>39.04</td>
                <td>23</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>

        Role
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>role</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>role</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>1</td>
                <td>system-admin</td>
                <td>1</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>kw-ope</td>
                <td>3</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>organization-admin</td>
                <td>5</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>organization-ope</td>
                <td>7</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>general-user</td>
                <td>10</td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>

        Image
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>target_type</th>
                <th>target_id</th>
                <th>filename</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>target_type</th>
                <th>target_id</th>
                <th>filename</th>
                <th>created_at</th>
                <th>updated_at</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>1</td>
                <td>KW\Infrastructure\Eloquents\SchoolMaster</td>
                <td>b68dda60-7703-11e9-8a09-cf887de1aa3e</td>
                <td><a href="">https://aws.s3...</a></td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>KW\Infrastructure\Eloquents\EventDetail</td>
                <td>b68dda60-7703-11e9-8a09-cf887de1aa3e</td>
                <td><a href="">https://aws.s3...</a></td>
                <td>2019-04-19 10:00:00</td>
                <td>2019-05-19 10:00:00</td>
                <td class="td-expand">
                    <button class="button">詳細</button>
                    <button class="button is-primary">更新</button>
                    <button class="button is-danger">削除</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "index",
        layout: 'kw'
    }
</script>

<style lang="scss" scoped>
    table {
        table-layout: fixed;
        min-width: 100%;
    }
    tbody th {
        width: 200px;
        min-width: 200px;
    }
    td {
        width: 130px;
        min-width: 130px;
    }
    .td-expand {
        width: 250px;
        min-width: 250px;
    }
    .table__container {
        max-width: 100%;
        overflow: auto;
        /*width: 100%;*/
        /*overflow-x: scroll;*/
    }
</style>
