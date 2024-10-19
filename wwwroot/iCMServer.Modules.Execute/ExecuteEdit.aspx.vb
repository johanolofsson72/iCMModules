
Imports System.Security
Imports System.Security.Principal
Imports System.web
Imports System.Web.Security
Imports System.data

Public Class ExecuteEdit
    Inherits System.Web.UI.Page

#Region " Web Form Designer Generated Code "

    'This call is required by the Web Form Designer.
    <System.Diagnostics.DebuggerStepThrough()> Private Sub InitializeComponent()

    End Sub
    Protected WithEvents lblHeader As System.Web.UI.WebControls.Label
    Protected WithEvents btnUpdate As System.Web.UI.WebControls.Button
    Protected WithEvents btnCancel As System.Web.UI.WebControls.Button
    Protected WithEvents btnDelete As System.Web.UI.WebControls.Button
    Protected WithEvents Label1 As System.Web.UI.WebControls.Label
    Protected WithEvents txtUrl As System.Web.UI.WebControls.TextBox

    'NOTE: The following placeholder declaration is required by the Web Form Designer.
    'Do not delete or move it.
    Private designerPlaceholderDeclaration As System.Object

    Private Sub Page_Init(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Init
        'CODEGEN: This method call is required by the Web Form Designer
        'Do not modify it using the code editor.
        InitializeComponent()
    End Sub

#End Region

    Private ModId As Integer = 0
    Private PagId As Integer = 0
    Private oSite As clsSiteSettings = CType(System.Web.HttpContext.Current.Items("SiteSettings"), clsSiteSettings)

    Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

        If Not (Request.Params("ModId") Is Nothing) Then
            ModId = Int32.Parse(Request.Params("ModId"))
        End If

        If Not (Request.Params("PageId") Is Nothing) Then
            PagId = Int32.Parse(Request.Params("PageId"))
        End If

        If Not Page.IsPostBack Then
            Call BindData()
        End If
    End Sub

    Private Sub BindData()
        Dim oLang As New clsLanguageText
        Dim al As New System.Collections.ArrayList
        al = oLang.GetLanguageTextByLocation(oSite.Language, "iConsulting.iCMServer.Modules.Quicklinks")
        lblHeader.Text = Server.HtmlDecode(oLang.Find(al, "quicklinks_header"))
        btnUpdate.Text = Server.HtmlDecode(oLang.Find(al, "quicklinks_update"))
        btnCancel.Text = Server.HtmlDecode(oLang.Find(al, "quicklinks_cancel"))
        btnDelete.Text = Server.HtmlDecode(oLang.Find(al, "quicklinks_delete"))
        btnDelete.Attributes.Add("onclick", "confirm('" & Server.HtmlDecode(oLang.Find(al, "quicklinks_confirm")) & "');")

        Dim sRoles As String
        If HttpContext.Current.User.Identity.IsAuthenticated Then
            Dim ticket As FormsAuthenticationTicket = FormsAuthentication.Decrypt(Context.Request.Cookies("siteroles").Value)
            sRoles = ticket.UserData.ToString & "All Users"
        Else
            sRoles = "All Users"
        End If

        Dim oRedirect As New clsExecute
        Dim ds As DataSet = oRedirect.GetExecute(ModId, PagId)
        If ds.Tables.Count > 0 Then
            If ds.Tables(0).Rows.Count > 0 Then
                txtUrl.Text = ds.Tables(0).Rows(0)("qui_url")
            End If
        End If
    End Sub

    Private Sub btnUpdate_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnUpdate.Click
        Dim oRedirect As New clsExecute
        If Not oRedirect.UpdateQuicklink(ModId, PagId, txtUrl.Text) Then

        End If
        Response.Redirect("~/icm.aspx?PageId=" & PagId & "&ExpId=" & ModId)
    End Sub

    Private Sub btnCancel_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnCancel.Click
        Response.Redirect("~/icm.aspx?PageId=" & PagId & "&ExpId=" & ModId)
    End Sub

    Private Sub btnDelete_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnDelete.Click
        If ViewState("EventUpdate") = True Then
            Dim oRedirect As New clsExecute
            If Not oRedirect.DeleteQuicklink(ModId, PagId) Then

            End If
            Response.Redirect("~/icm.aspx?PageId=" & PagId & "&ExpId=" & ModId)
        End If
    End Sub

End Class
