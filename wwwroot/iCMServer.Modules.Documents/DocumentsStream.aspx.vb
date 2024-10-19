Public Class DocumentsStream
    Inherits System.Web.UI.Page

#Region " Web Form Designer Generated Code "

    'This call is required by the Web Form Designer.
    <System.Diagnostics.DebuggerStepThrough()> Private Sub InitializeComponent()

    End Sub
    Private ModId As Integer = 0
    Private CatId As Integer = 0
    Private DocId As Integer = 0

    'NOTE: The following placeholder declaration is required by the Web Form Designer.
    'Do not delete or move it.
    Private designerPlaceholderDeclaration As System.Object

    Private Sub Page_Init(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Init
        'CODEGEN: This method call is required by the Web Form Designer
        'Do not modify it using the code editor.
        InitializeComponent()
    End Sub

#End Region

    Protected WithEvents IF1 As System.Web.UI.HtmlControls.HtmlGenericControl

    Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

        If Not (Request.Params("ModId") Is Nothing) Then
            ModId = Int32.Parse(Request.Params("ModId"))
        End If

        If Not (Request.Params("CatId") Is Nothing) Then
            CatId = Int32.Parse(Request.Params("CatId"))
        End If

        If Not (Request.Params("DocId") Is Nothing) Then
            DocId = Int32.Parse(Request.Params("DocId"))
        End If

        Dim oDoc As New clsDocuments
        Dim ds As New Data.DataSet
        ds = oDoc.GetDocument(ModId, CatId, DocId)
        Dim dr As Data.DataRow
        dr = ds.Tables(0).Rows(0)
        Dim buffer As Byte() = dr("doc_content")
        'Response.AppendHeader("content-disposition", "attachment; filename=" & dr("doc_name"))
        Response.AppendHeader("content-disposition", "filename=" & dr("doc_name"))
        Response.ContentType = CType(dr("doc_contenttype"), String)
        Response.OutputStream.Write(buffer, 0, buffer.Length)
        Response.End()

        '''Dim oDoc As New clsDocuments
        '''Dim ds As New Data.DataSet
        '''ds = oDoc.GetDocument(ModId, CatId, DocId)
        '''Dim dr As Data.DataRow
        '''dr = ds.Tables(0).Rows(0)
        '''Dim buffer As Byte() = dr("doc_content")
        ''''Response.AppendHeader("content-disposition", "attachment; filename=" & dr("doc_name"))
        '''IF1.Page.Response.AppendHeader("content-disposition", "filename=" & dr("doc_name"))
        '''IF1.Page.Response.ContentType = CType(dr("doc_contenttype"), String)
        '''IF1.Page.Response.OutputStream.Write(buffer, 0, buffer.Length)
        '''IF1.Page.Response.End()



    End Sub

End Class
