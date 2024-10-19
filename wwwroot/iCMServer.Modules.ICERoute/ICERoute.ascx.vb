Imports System.Web
Imports System.Data
Imports System.Collections
Imports System.Web.UI.WebControls

Public Class ICERoute : Inherits clsSiteModuleControl

#Region " Web Form Designer Generated Code "

    'This call is required by the Web Form Designer.
    <System.Diagnostics.DebuggerStepThrough()> Private Sub InitializeComponent()

    End Sub
    Protected WithEvents Minimizer As System.Web.UI.HtmlControls.HtmlGenericControl
    Protected WithEvents btnOpen As System.Web.UI.WebControls.ImageButton
    Protected WithEvents btnSave As System.Web.UI.WebControls.ImageButton
    Protected WithEvents DropDownList1 As System.Web.UI.WebControls.DropDownList
    Protected WithEvents btnMeasure As System.Web.UI.WebControls.ImageButton
    Protected WithEvents btnZoomIn As System.Web.UI.WebControls.ImageButton
    Protected WithEvents btnZoomOut As System.Web.UI.WebControls.ImageButton
    Protected WithEvents btnPrint As System.Web.UI.WebControls.ImageButton
    Protected WithEvents Label8 As System.Web.UI.WebControls.Label
    Protected WithEvents btnPrevCust As System.Web.UI.WebControls.ImageButton
    Protected WithEvents btnNextCust As System.Web.UI.WebControls.ImageButton
    Protected WithEvents btnListAllCust As System.Web.UI.WebControls.ImageButton
    Protected WithEvents btnAddCust As System.Web.UI.WebControls.ImageButton
    Protected WithEvents Label9 As System.Web.UI.WebControls.Label
    Protected WithEvents btnDelCust As System.Web.UI.WebControls.ImageButton
    Protected WithEvents Label10 As System.Web.UI.WebControls.Label
    Protected WithEvents Label1 As System.Web.UI.WebControls.Label
    Protected WithEvents TextBox1 As System.Web.UI.WebControls.TextBox
    Protected WithEvents TextBox5 As System.Web.UI.WebControls.TextBox
    Protected WithEvents Label2 As System.Web.UI.WebControls.Label
    Protected WithEvents TextBox2 As System.Web.UI.WebControls.TextBox
    Protected WithEvents Label3 As System.Web.UI.WebControls.Label
    Protected WithEvents TextBox3 As System.Web.UI.WebControls.TextBox
    Protected WithEvents Label5 As System.Web.UI.WebControls.Label
    Protected WithEvents TextBox6 As System.Web.UI.WebControls.TextBox
    Protected WithEvents Label6 As System.Web.UI.WebControls.Label
    Protected WithEvents Textbox7 As System.Web.UI.WebControls.TextBox
    Protected WithEvents Label7 As System.Web.UI.WebControls.Label
    Protected WithEvents Textbox8 As System.Web.UI.WebControls.TextBox
    Protected WithEvents Label4 As System.Web.UI.WebControls.Label
    Protected WithEvents TextBox4 As System.Web.UI.WebControls.TextBox
    Protected WithEvents btnGetPosAddr As System.Web.UI.WebControls.Button
    Protected WithEvents Label17 As System.Web.UI.WebControls.Label
    Protected WithEvents Textbox9 As System.Web.UI.WebControls.TextBox
    Protected WithEvents btnGetPosMap As System.Web.UI.WebControls.Button
    Protected WithEvents Label14 As System.Web.UI.WebControls.Label
    Protected WithEvents btnAddTrip As System.Web.UI.WebControls.ImageButton
    Protected WithEvents Label15 As System.Web.UI.WebControls.Label
    Protected WithEvents btnDelTrip As System.Web.UI.WebControls.ImageButton
    Protected WithEvents Label16 As System.Web.UI.WebControls.Label
    Protected WithEvents Label11 As System.Web.UI.WebControls.Label
    Protected WithEvents Label13 As System.Web.UI.WebControls.Label
    Protected WithEvents btnDelRoute As System.Web.UI.WebControls.ImageButton
    Protected WithEvents Label12 As System.Web.UI.WebControls.Label
    Protected WithEvents imgMap As System.Web.UI.WebControls.Image
    Protected WithEvents Form1 As System.Web.UI.HtmlControls.HtmlForm
    Protected WithEvents Label18 As System.Web.UI.WebControls.Label
    Protected WithEvents btnPlanRoute As System.Web.UI.WebControls.ImageButton
    Protected WithEvents lbTrips As System.Web.UI.WebControls.ListBox
    Protected WithEvents lbRoutes As System.Web.UI.WebControls.ListBox

    'NOTE: The following placeholder declaration is required by the Web Form Designer.
    'Do not delete or move it.
    Private designerPlaceholderDeclaration As System.Object

    Private Sub Page_Init(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Init
        'CODEGEN: This method call is required by the Web Form Designer
        'Do not modify it using the code editor.
        InitializeComponent()
    End Sub

#End Region

    Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Minimizer.ID = ModuleId
        Call BindData()
    End Sub

    Private Sub RenderScript()
 
    End Sub

    Private Sub BindData()
        Dim oSite As clsSiteSettings = CType(HttpContext.Current.Items("SiteSettings"), clsSiteSettings)
        'Dim oLang As New clsLanguageText
        'Dim al As New ArrayList
        'al = oLang.GetLanguageTextByLocation(oSite.Language, "iConsulting.iCMServer.Modules.ICERoute")

        'btnSearch.Text = Server.HtmlDecode(oLang.Find(al, "search_search"))
        

    End Sub

    Private Sub btnZoomIn_Click(ByVal sender As System.Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnZoomIn.Click
        imgMap.ImageUrl() = ".\Images\SmallEx.BMP"
    End Sub

    Private Sub btnZoomOut_Click(ByVal sender As System.Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnZoomOut.Click
        imgMap.ImageUrl() = ".\Images\LargeEx.BMP"
    End Sub

    Private Sub btnAddTrip_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnAddTrip.Click

    End Sub

    Private Sub btnAddRoute_Click(ByVal sender As System.Object, ByVal e As System.Web.UI.ImageClickEventArgs)

    End Sub

    Private Sub btnPlanRoute_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnPlanRoute.Click
        'se till så genererar rutt av markerad rutt!!!Hur???
        'LogixIE
        Shell("c:\WINDOWS\LogiXIE.exe.lnk", AppWinStyle.NormalFocus, True, 2000)
        'Route Logix
        Dim routeToMap As String = "c:\PlanLogix\Logix32\TLPW.exe C:\Carp\Workarea\Test2\" + lbRoutes.SelectedItem.Value + " /h /s /x"

        Shell(routeToMap, AppWinStyle.NormalFocus, True, 2000)

        imgMap.ImageUrl() = "C:\Carp\Workarea\Test2\TEST0001.BMP" 'ändra det sen!!!

    End Sub

    Private Sub JavaScript()
        ' Form the script to be registered at client side. 
        Dim scriptString As String = "<script language=JavaScript> function DoClick() {"
        scriptString += "showMessage2.innerHTML='<h4>Welcome to Microsoft .NET!</h4>'}"
        scriptString += "function Page_Load(){ showMessage1.innerHTML="
        scriptString += "'<h4>RegisterStartupScript Example</h4>'}<"
        scriptString += "/"
        scriptString += "script>"

        If (Not Me.Page.IsStartupScriptRegistered("Startup")) Then
            Me.Page.RegisterStartupScript("Startup", scriptString)
        End If

    End Sub
End Class
