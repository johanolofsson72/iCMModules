Public Class AddRoute
    Inherits System.Web.UI.Page

#Region " Web Form Designer Generated Code "

    'This call is required by the Web Form Designer.
    <System.Diagnostics.DebuggerStepThrough()> Private Sub InitializeComponent()

    End Sub
    Protected WithEvents Label1 As System.Web.UI.WebControls.Label
    Protected WithEvents TextBox1 As System.Web.UI.WebControls.TextBox
    Protected WithEvents Button1 As System.Web.UI.WebControls.Button
    Protected WithEvents Button2 As System.Web.UI.WebControls.Button
    Protected WithEvents Label4 As System.Web.UI.WebControls.Label
    Protected WithEvents ListBox1 As System.Web.UI.WebControls.ListBox
    Protected WithEvents Button3 As System.Web.UI.WebControls.Button
    Protected WithEvents Button4 As System.Web.UI.WebControls.Button
    Protected WithEvents Label2 As System.Web.UI.WebControls.Label

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
        'Put user code to initialize the page here
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        ' Spara informationen

        ' St�ng detta f�nster
        Call CloseWindow()
    End Sub

    Private Sub CloseWindow()
        If (Not Me.Page.IsClientScriptBlockRegistered("ReturnResultScript")) Then
            Me.Page.RegisterClientScriptBlock("ReturnResultScript", "<script language=JavaScript> ReturnResult() </script>")
        End If
    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        ' St�ng detta f�nster
        Call CloseWindow()
    End Sub
End Class
