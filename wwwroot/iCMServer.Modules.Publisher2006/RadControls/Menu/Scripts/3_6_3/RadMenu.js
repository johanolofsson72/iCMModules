function RadMenuItem(O10,l10,i10){ this.ParentMenu=O10; this.I10=null; this.o11=null; this.ParentGroup=null; this.ChildGroup=null; this.O11=null; this.PreviousItem=null; this.NextItem=null; this.Container=document.getElementById(l10[0]); var l11=this ; if (this.ParentMenu.i11.Ig(this.Container)){ this.Container.onmousedown= function (processedEvent){l11.MouseDown(processedEvent);} ; this.Container.onmouseup= function (processedEvent){l11.MouseUp(processedEvent);} ; this.Container.onmouseover= function (processedEvent){l11.ProcItem(processedEvent);} ; } this.Container.Images=this.Container.getElementsByTagName("\151mg"); this.Container.Cells=this.Container.getElementsByTagName("td"); this.Container.I11=this.Container.getElementsByTagName("\x74able"); this.CustomAttributes=null; for (i=0; i<i10.length; i++){if (this.ID==i10[i][0]){ this.CustomAttributes=i10[i]; break; }} this.ID=l10[0]; this.o12=l10[1]; this.Level=l10[2]; this.Width=l10[3]; this.Height=l10[4]; this.Image=this.ParentMenu.O12(l10[5]); this.ImageDisabled=this.ParentMenu.O12(l10[6]); this.ImageClicked=this.ParentMenu.O12(l10[7]); this.ImageOver=this.ParentMenu.O12(l10[8]); this.LeftLogo=this.ParentMenu.O12(l10[9]); this.LeftLogoOver=this.ParentMenu.O12(l10[10]); this.LeftLogoDisabled=this.ParentMenu.O12(l10[11]); this.LeftLogoClicked=this.ParentMenu.O12(l10[12]); this.RightLogo=this.ParentMenu.O12(l10[13]); this.RightLogoOver=this.ParentMenu.O12(l10[14]); this.RightLogoDisabled=this.ParentMenu.O12(l10[15]); this.RightLogoClicked=this.ParentMenu.O12(l10[16]); this.CssClass=l10[17]; if (!this.ParentMenu.i11.Ig(this.CssClass)){ this.CssClass=O10.l12; } this.LevelCss=l10[18]; if (!this.ParentMenu.i11.Ig(this.LevelCss)){ this.LevelCss=O10.i12; } this.CssClassOver=l10[19]; if (!this.ParentMenu.i11.Ig(this.CssClassOver)){ this.CssClassOver=O10.I12; } this.CssClassClicked=l10[20]; if (!this.ParentMenu.i11.Ig(this.CssClassClicked)){ this.CssClassClicked=O10.o13; } this.CssClassDisabled=l10[21]; if (!this.ParentMenu.i11.Ig(this.CssClassDisabled)){ this.CssClassDisabled=O10.O13; } this.l13=l10[22]; this.Text=l10[23]; this.i13=l10[24]; this.I13=l10[25]; this.o14=l10[26]; this.O14=l10[27]; this.Href=null; this.Href=l10[28]; this.Target=null; this.Target=l10[29]; this.ImageAlt=l10[30]; this.ImageLongDesc=l10[31]; this.StatusBarTip=l10[32]; this.ImageWidth=l10[33]; this.ImageHeight=l10[34]; this.l14=l10[35]; this.ToolTip=l10[36]; this.Value=l10[37]; this.ToolTip=l10[38]; this.Category=l10[39]; this.i14=l10[40]; this.I14=l10[41]; this.o15=l10[42]; this.Enabled=l10[43]; this.O15=l10[44]; this.Visible=l10[45]; this.Selected=l10[46]; this.l15=null; this.l15=l10[47]; this.ImageWidth=l10[48]; this.ImageHeight=l10[49]; this.i15=l10[50]; this.I15=null; this.I15=l10[51]; this.o16=null; this.o16=l10[52]; this.O16=null; this.O16=l10[53]; this.l16=null; this.l16=l10[54]; this.i16=l10[55]; if (this.ParentMenu.I16){ this.o17=l10[56]; this.O17=l10[57]; }else { this.o17=null; this.O17=null; } this.ParentGroup=this.ParentMenu.AllGroups.l17(this.o12); this.ChildGroup=this.ParentMenu.AllGroups.l17(this.i15); this.O11=this.ParentGroup.O11; this.ParentGroup.i17[this.ParentGroup.i17.length]=this ; this.I17=0; this.o18=0; this.SetInitialState(); this.ResetStateToInitial(); if ((this.l15!=null) || this.Href!=null || (this.ParentMenu.ClickToOpen== true) || (this.ParentMenu.i11.Ig(this.O16) || this.ParentMenu.i11.Ig(this.ParentMenu.O16) || this.ParentMenu.i11.Ig(this.o16) || this.ParentMenu.i11.Ig(this.ParentMenu.o16) || this.ParentMenu.i11.Ig(this.l16))){ this.O18= true; }else { this.O18= false; }}RadMenuItem.prototype.MouseUp= function (processedEvent){if (this.O18!= false){ this.l18(processedEvent); this.RemoveClick(processedEvent); }};RadMenuItem.prototype.MouseDown= function (processedEvent){if (!this.Enabled){return null; }if (this.ParentMenu.i11.Ig(this.I15)){return true; }if (this.ParentMenu.FirstClick== false){ this.ParentMenu.FirstClick= true; if (this.ChildGroup){ this.ParentMenu.GroupStateManagement[this.Level+1]=this.ChildGroup.ID; this.ChildGroup.Show(this.Container); }}else if (this.ParentMenu.FirstClick && this.ParentMenu.ClickToOpen && (this.ParentGroup==this.ParentMenu.RootGroup)){ this.ParentMenu.FirstClick= false; this.ParentMenu.CloseAll(0, true); }if (this.O18!= false){ this.ApplyClick(processedEvent); this.i18(processedEvent); }};RadMenuItem.prototype.ProcItem= function (){ this.ParentMenu.I18(this.ParentMenu.o19); this.ParentMenu.O19= true; var l19=null; var i19=""; if (this.ChildGroup){l19=this.ChildGroup; i19=l19.ID; }if (this ==(this.ParentGroup.I19)){return; }if (!this || !this.Enabled){return; }var o1a=this.Level; if (this.ParentMenu.i11.Ig(l19) && this.ParentMenu.GroupStateManagement[o1a+1]==i19){return; } this.ParentMenu.CloseAll(o1a); if (l19 && (this.ParentMenu.FirstClick== true)){ this.ParentMenu.GroupStateManagement[o1a+1]=i19; l19.Show(this.Container); }var O1a=this.ParentGroup.I19; if (this ==O1a){return; }if (O1a){O1a.RemoveHilight(); } this.ParentGroup.I19=this ; if (!this.ParentMenu.i11.Ig(this.I15)){ this.ApplyHilight(); }} ; RadMenuItem.prototype.GetParentGroups= function (){if (!this.I10){ this.I10=new RadHashtable(); }if (this.I10.length()<=0){var l1a=this.ParentGroup; while ((l1a!=null)){ this.I10.Add(l1a); if (l1a.O11!=null){l1a=l1a.O11.ParentGroup; }else {break; }}}return this.I10; };RadMenuItem.prototype.GetParentItems= function (){if (!this.o11){ this.o11=new RadHashtable(); }if (this.o11.length()<=0){var i1a=this ; while ((i1a!=null)){ this.o11.Add(i1a); if (i1a.O11!=null){i1a=i1a.O11; }else {break; }}}return this.o11; };RadMenuItem.prototype.SetInitialState= function (I1a){if (!I1a){if (this.Enabled){if (this.Selected){ this.I17 |= MODE_NORMAL; this.I17 |= MODE_SELECTED; }else { this.I17 |= MODE_NORMAL; }}else { this.I17 |= MODE_DISABLED; }}else { this.I17=parseInt(I1a); }};RadMenuItem.prototype.ResetStateToInitial= function (){ this.o18=this.I17; };RadMenuItem.prototype.RemoveState= function (o1b){ this.o18 &= ~o1b; };RadMenuItem.prototype.AddState= function (O1b){ this.o18 |= O1b; };RadMenuItem.prototype.CheckState= function (l1b){if ((this.o18&l1b)==l1b){return true; }else {return false; }};RadMenuItem.prototype.i1b= function (){if (this.Href!=null){try {if (this.Target!=null){if (this.Target=="_se\x6cf"){self.location.href=this.Href; }else if (this.Target=="\x5ftop"){top.location.href=this.Href; }else if (this.Target=="_pa\x72\x65nt"){self.parent.location.href=this.Href; }else if (this.Target=="_bl\x61\x6ek"){window.open(this.Href,this.Target); }else if (top.frames){if (top.frames[this.Target]){top.frames[this.Target].location.href=this.Href; }else {window.alert("Frame \047"+this.Target+"\047\x68\x61s no\x74 loaded\x20\157\x72 does\x6e\x27t \x65\x78is\x74"); }}else {window.open(this.Href,this.Target); }}else {self.location.href=this.Href; }}catch (e){}}if (this.l15!=null){if (this.ParentMenu.I1b){if (this.l15.indexOf("_DoPostBack\x57\x69thO\x70\164i\x6fns")>=0){eval(this.l15); }else if (typeof(Page_ClientValidate)!="\x66unction" || Page_ClientValidate()){try {eval(this.l15); }catch (e){}}}else {try {eval(this.l15); }catch (e){}}}};RadMenuItem.prototype.Action= function (o1c,processedEvent){if (this.i16){return; }if ((o1c==MODE_HILIGHT) && this.CheckState(MODE_HILIGHT)){if (this.ParentMenu.O1c.HasStatus && this.StatusBarTip){window.status=this.StatusBarTip; }if (this.O16){var s=this.O16+"\x28this,proc\x65\x73sed\x45\x76en\x74\051\x3b"; eval(s); }else if (this.ParentMenu.O16){var s=this.ParentMenu.O16+"\x28this,p\x72\x6fcess\x65\x64Eve\x6e\164)\x3b"; eval(s); }}if ((o1c==MODE_CLICKED) && this.CheckState(MODE_CLICKED)){if (this.ParentMenu.i11.ii(processedEvent)){return; }if (this.o16){var s=this.o16+"(this,pr\x6f\x63esse\x64\x45ven\x74\051\x3b"; if (eval(s)== false){return; }}else if (this.ParentMenu.o16){var s=this.ParentMenu.o16+"(this,pro\x63\x65ssed\x45\x76ent\x29\073"; if (eval(s)== false){return; }} this.i1b(); }if ((o1c==MODE_SELECTED) && this.CheckState(MODE_SELECTED)){if (this.Selected== true){ this.Selected= false; }else { this.Selected= true; }if (this.l16){var s=this.l16+"(th\x69\x73,"+this.Selected+"\x29\073"; eval(s); }}if ((o1c==MODE_NORMAL) && !this.CheckState(MODE_NORMAL)){ this.Enabled= true; }if ((o1c==MODE_DISABLED) && !this.CheckState(MODE_DISABLED)){ this.Enabled= false; }};RadMenuItem.prototype.Render= function (o1c,processedEvent){if (this.i16){return; }var l1c=null; var i1c=null; var I1c=null; var o1d=null; if ((o1c==MODE_HILIGHT) && this.CheckState(MODE_HILIGHT)){l1c=this.ImageOver; i1c=this.LeftLogoOver; I1c=this.RightLogoOver; o1d=this.CssClassOver; }else if ((o1c==MODE_CLICKED) && this.CheckState(MODE_CLICKED)){l1c=this.ImageClicked; i1c=this.LeftLogoClicked; I1c=this.RightLogoClicked; o1d=this.CssClassClicked; }else if ((o1c==MODE_SELECTED) && this.CheckState(MODE_SELECTED)){l1c=this.ImageClicked; i1c=this.LeftLogoClicked; I1c=this.RightLogoClicked; o1d=this.CssClassClicked; }else if ((o1c==MODE_NORMAL) && this.CheckState(MODE_NORMAL)){l1c=this.Image; i1c=this.LeftLogo; I1c=this.RightLogo; o1d=this.CssClass; }else if ((o1c==MODE_DISABLED) && this.CheckState(MODE_DISABLED)){l1c=this.ImageDisabled; i1c=this.LeftLogoDisabled; I1c=this.RightLogoDisabled; o1d=this.CssClassDisabled; }if (l1c && (this.ParentMenu.O1d== true)){if (this.Container.Images[0].src!=l1c){ this.Container.Images[0].src=l1c; }}else {if (i1c && (this.ParentMenu.O1d== true)){if (this.Container.Images[0].src!=i1c){ this.Container.Images[0].src=i1c; }}if (I1c && (this.ParentMenu.O1d== true)){var l1d=(this.LeftLogo)?(this.Container.Images.length-1): 0; if (this.Container.Images[l1d].src!=I1c){ this.Container.Images[l1d].src=I1c; }}}if (o1d!=null && (this.Container.className!=o1d)){ this.Container.className=o1d; if ((this.ParentMenu.i1d) && this.Container.Cells!=null){for (var i=0; i<this.Container.Cells.length; i++){ this.Container.Cells[i].className=o1d; }}}};RadMenuItem.prototype.ApplyHilight= function (){ this.AddState(MODE_HILIGHT); this.Render(MODE_HILIGHT); this.Action(MODE_HILIGHT); };RadMenuItem.prototype.RemoveHilight= function (){ this.RemoveState(MODE_HILIGHT); if (this.CheckState(MODE_NORMAL)){ this.Render(MODE_NORMAL); }else if (this.CheckState(MODE_DISABLED)){ this.Render(MODE_DISABLED); }};RadMenuItem.prototype.ApplyClick= function (processedEvent){ this.AddState(MODE_CLICKED); this.Render(MODE_CLICKED); };RadMenuItem.prototype.RemoveClick= function (processedEvent){ this.Action(MODE_CLICKED,processedEvent); this.RemoveState(MODE_CLICKED); this.Render(MODE_HILIGHT); };RadMenuItem.prototype.i18= function (processedEvent){ this.AddState(MODE_SELECTED); this.Action(MODE_SELECTED,processedEvent); };RadMenuItem.prototype.l18= function (processedEvent){ this.RemoveState(MODE_SELECTED); };function RadMenuGroup(I1d,o1e){ this.ParentMenu=I1d; this.i17=new Array(); this.O11=null; this.I10=null; this.o11=null; this.Container=document.getElementById(o1e[0]); var l11=this ; if (this.ParentMenu.i11.Ig(this.Container)){ this.Container.onmouseout= function (processedEvent){l11.GroupStatus(processedEvent);} ; } this.Visible= false; this.I19=null; this.ID=o1e[0]; this.O1e=o1e[1]; this.l1e=o1e[2]; this.i1e=o1e[3]; this.I1e=o1e[4]; this.Level=o1e[5]; this.Width=o1e[6]; this.CssClass=o1e[7]; this.LevelCss=o1e[8]; this.o1f=o1e[9]; if (!this.o1f){ this.o1f=RIGHT_DIRECTION; } this.ExpandEffect=o1e[10]; this.O1f=o1e[11]; this.l1f=o1e[12]; if (!this.l1f){ this.l1f=VERTICAL_DIRECTION; } this.i1f=o1e[13]; this.I1f=o1e[14]; this.o1g=this.ParentMenu.O12(o1e[15]); this.O1g=null; this.O1g=o1e[16]; this.OnClientGroupCollapse=null; this.l1g=o1e[17]; if (this.l1g== true){ this.i1g=o1e[18]; this.I1g=o1e[19]; this.o1h=this.ParentMenu.O12(o1e[20]); this.O1h=this.ParentMenu.O12(o1e[21]); this.l1h=this.ParentMenu.O12(o1e[22]); this.i1h=this.ParentMenu.O12(o1e[23]); this.I1h=this.ParentMenu.O12(o1e[24]); this.o1i=this.ParentMenu.O12(o1e[25]); this.O1i=this.ParentMenu.O12(o1e[26]); this.l1i=this.ParentMenu.O12(o1e[27]); this.i1i=o1e[28]; this.I1i=o1e[29]; this.o1j=o1e[30]; this.O1j=o1e[31]; this.l1j=null; this.i1j=null; this.I1j=null; this.o1k=null; this.O1k=null; this.l1k=null; this.i1k=null; this.I1k=null; this.o1l=null; }}RadMenuGroup.prototype.GroupStatus= function (O1l){if (!O1l){var O1l=window.event; }if (this.ParentMenu.i11.Io((O1l.Oi)?O1l.Oi:O1l.toElement,this.ID)){return; }if (!(this.ParentMenu.ClickToOpen && this.ParentMenu.FirstClick== true)){ this.ParentMenu.O19= true; this.ParentMenu.l1l(); }};RadMenuGroup.prototype.AddItem= function (item){ this.i17.Add(item); };RadMenuGroup.prototype.RemoveItem= function (item){ this.i17.Remove(item); };RadMenuGroup.prototype.GroupExpand= function (i1l,I1l,o1m,O1m){if (!this.ParentMenu.i11.Ig(i1l) || !this.ParentMenu.i11.Ig(I1l)){return; }var l1m=0; var i1m=0; if (this.ParentMenu.IsStatic){l1m=this.ParentMenu.i11.ls(); i1m=this.ParentMenu.i11.ScrollLeft(); }var I1m=0; var o1n=0; var O1n=0; var l1n=0; I1m=i1l; o1n=this.ParentMenu.i11.lt()-(i1l+o1m); O1n=I1l; l1n=this.ParentMenu.i11.it()-(I1l+O1m); if (this.i1n){ this.i1n(); }var I1n=0; I1n=this.ParentMenu.i11.om(this.Container.childNodes[0]); if (I1n==0){I1n=this.ParentMenu.i11.om(this.Container); }var o1o=0; o1o=this.ParentMenu.i11.il(this.Container.childNodes[0]); if (o1o==0){o1o=this.ParentMenu.i11.il(this.Container); }var O1o=0; var l1o=0; var i1o=0; var I1o=this.ParentMenu.i11; if (I1o.Ig(this.O11)){var o1p=I1o.lk(this.O11.Container); if (o1p && (o1p.direction=="r\x74\x6c")){i1o=o1m-I1n; }}switch (this.o1f){case UP_DIRECTION:O1o=i1l+i1o; l1o=I1l-o1o; break; case DOWN_DIRECTION:O1o=i1l+i1o; l1o=I1l+O1m; break; case LEFT_DIRECTION:l1o=I1l; O1o=i1l-I1n; break; case RIGHT_DIRECTION:l1o=I1l; O1o=i1l+o1m; break; default:l1o=I1l; O1o=i1l+o1m; break; }O1o+=this.i1f; l1o+=this.I1f; var O1p=this.ParentMenu.i11.ou(O1o,l1o,I1n,o1o); if ((this.ParentMenu.i11.lt()-(O1o+i1m))>(this.ParentMenu.i11.lt()/2)){O1p.Ow=0; }if ((this.ParentMenu.i11.it()-(l1o+l1m))>(this.ParentMenu.i11.it()/2)){O1p.lw=0; }if (this.ParentMenu.IsStatic){O1p.lw=0; }var lq=this.ParentMenu.i11.lk(this.Container); if (O1p.Ow!=0 && O1p.lw!=0){lq.left=(i1l-I1n)+"p\x78"; lq.top=((I1l+O1m)-o1o)+"\160\x78"; }else if (O1p.Ow!=0){lq.top=l1o+"p\x78"; lq.left=(i1l-I1n)+"px"; }else if (O1p.lw!=0){lq.left=O1o+"px"; lq.top=((I1l+O1m)-o1o)+"px"; }else if (O1p.Ow==0 && O1p.lw==0){lq.left=O1o+"\x70\x78"; lq.top=l1o+"\x70x"; } this.ShowOverlay(lq.left,lq.top); this.ParentMenu.i11.Show(this.Container); };RadMenuGroup.prototype.ShowOverlay= function (l1p,i1p){if (document.readyState=="complete" && this.ParentMenu.I1p && (this.ParentMenu.O1c.IsIE55Win || this.ParentMenu.O1c.IsIE6Win)){if (!this.ParentMenu.i11.Ig(this.Container.iframeShim)){ this.Container.iframeShim=this.ParentMenu.i11.ik(this.Container); } this.Container.iframeShim.style.top=(i1p!=null)?i1p: this.Container.style.top+"p\x78"; this.Container.iframeShim.style.left=(l1p!=null)?l1p: this.Container.style.left+"\x70x"; this.Container.iframeShim.style.zIndex=(this.Container.style.zIndex-1); this.ParentMenu.i11.Show(this.Container.iframeShim); }};RadMenuGroup.prototype.o1q= function (){if (document.readyState=="complete" && this.ParentMenu.I1p && (this.ParentMenu.O1c.IsIE55Win || this.ParentMenu.O1c.IsIE6Win)){if (this.ParentMenu.i11.Ig(this.Container.iframeShim)){ this.ParentMenu.i11.Ip(this.Container.iframeShim); }}};RadMenuGroup.prototype.ApplyEffects= function (){if (this.ParentMenu.O1c.HasFilters== false && this.ParentMenu.i11.Ig(document.body.filters) && this.ParentMenu.O1c.IsOsWindows){ this.ParentMenu.O1c.HasFilters= true; }if ((this.ParentMenu.O1c.HasFilters== false) || !(this.ParentMenu.O1c.IsOsWindows)){return; }if (this.ParentMenu.O1c.HasFilters && this.ParentMenu.O1c.IsIE5Win){return; }if (this.ParentMenu.O1c.HasFilters && this.ParentMenu.i11.Ig(RadFilterUtils)){if (this.ParentMenu.i11.Ig(this.ExpandEffect) && this.ExpandEffect!=""){var O1q=""; var l1q=.10000e3; if (this.ParentMenu.i11.Ig(this.O1f) && this.O1f!=""){l1q=this.O1f; }else if (this.ParentMenu.i11.Ig(this.ParentMenu.i1q) && this.i1q!=""){l1q=this.ParentMenu.i1q; }switch (this.ExpandEffect){case "Barn":var P="\157ut"; var N="\x76ertical"; O1q=RadFilterUtils.r(this.Container,P,N,l1q); break; case "B\x6c\x69nds":var bands=10; var direction="down"; O1q=RadFilterUtils.M(this.Container,bands,direction,l1q); break; case "Check\x65\x72Board":var L=10; var l=10; var direction="\x72ight"; O1q=RadFilterUtils.m(this.Container,L,l,direction); break; case "Fade":var k=.10e1; O1q=RadFilterUtils.K(this.Container,k,l1q); break; case "\x47\x72adient\x57\x69pe":var P="\x66orward"; var O1=.25; var D=0; O1q=RadFilterUtils.o1(this.Container,P,O1,D,l1q); break; case "\x49nset":var I1=0; O1q=RadFilterUtils.i1(this.Container,I1,l1q); break; case "\x49ris":var H="PL\x55\x53"; var P="\157ut"; O1q=RadFilterUtils.J(this.Container,H,P,l1q); break; case "Pi\x78\x65late":var G=50; O1q=RadFilterUtils.h(this.Container,G,l1q); break; case "\x52\x61dialWi\x70\x65":var D="\x43\x4cOCK"; O1q=RadFilterUtils.f(this.Container,D,l1q); break; case "\x52andomBar\x73":var N="horizo\x6e\x74al"; O1q=RadFilterUtils.g(this.Container,N,l1q); break; case "Ran\x64\x6fmDisso\x6c\x76e":O1q=RadFilterUtils.F(this.Container,l1q); break; case "\x53\x6cide":var C="\x48IDE"; var bands=1; O1q=RadFilterUtils.d(this.Container,C,bands,l1q); break; case "\x53\x70iral":var B=16; var o0=16; O1q=RadFilterUtils.c(this.Container,B,o0,l1q); break; case "\x53tretch":var l0="\x53PIN"; O1q=RadFilterUtils.O0(this.Container,l0,l1q); break; case "\x53trips":var P="leftdown"; O1q=RadFilterUtils.i0(this.Container,P,l1q); break; case "\x57\x68eel":var spokes=4; O1q=RadFilterUtils.I0(this.Container,spokes,l1q); break; case "\132\x69\x67zag":var B=16; var o0=16; O1q=RadFilterUtils.l1(this.Container,B,o0,l1q); break; }}if (((this.ParentMenu.Opacity>=0) && (this.ParentMenu.Opacity!=100)) || this.ParentMenu.I1q>0){if ((this.ParentMenu.Opacity>=0) && (this.ParentMenu.Opacity!=100)){O1q=RadFilterUtils.O3(this.Container,this.ParentMenu.Opacity,0); }if (this.ParentMenu.I1q>0){O1q=RadFilterUtils.o3(this.Container,135,this.ParentMenu.o1r,this.ParentMenu.I1q); }}if (this.Container.filters[0]!=null){ this.Container.filters[0].apply(); this.Container.filters[0].play(); }}};RadMenuGroup.prototype.Show= function (parentElement){if (!this.Visible){ this.Visible= true; if ((this.ParentMenu.i11.Ig(this.ExpandEffect) && this.ExpandEffect!="") || this.ParentMenu.i11.Ig(this.ExpandEffect) || (((this.ParentMenu.Opacity>=0) && (this.ParentMenu.Opacity!=100)) || this.ParentMenu.I1q>0)){ this.ApplyEffects(); }var O1r=this.ParentMenu.i11.is(parentElement); var l1r=this.ParentMenu.i11.Ot(parentElement); var i1r=this.ParentMenu.i11.om(parentElement); var I1r=this.ParentMenu.i11.il(parentElement); this.GroupExpand(O1r,l1r,i1r,I1r); if (this.O1g){var s=this.O1g+"\050\x74his\x29\x3b"; eval(s); }}};function RadMenu(o1s,o1e,O1s,l1s){if (RadMenuHelperUtils.Ig(RadBrowserUtils)){ this.O1c=RadBrowserUtils; } this.i11=RadMenuHelperUtils; this.i1s=null; if (this.O1c.HasFilters== false && this.i11.Ig(document.body.filters) && this.O1c.IsOsWindows){ this.i1s=RadFilterUtils; } this.AllGroups=new RadHashtable(); this.AllItems=new RadHashtable(); this.ID=o1s[0][0]; this.I16=o1s[0][1]; this.I1s=o1s[0][2]; this.o1t=o1s[0][3]; this.ImagesBaseDir=""; this.ImagesBaseDir=o1s[0][4]; this.I1p=o1s[0][5]; this.O1t=o1s[0][6]; this.l1t=o1s[0][7]; this.i1t=o1s[0][8]; this.IsContext=o1s[0][9]; this.ContextHtmlElementID=o1s[0][10]; this.I1t=o1s[0][11]; this.I1b=o1s[0][12]; this.ClickToOpen=o1s[0][13]; this.o1u=o1s[0][14]; this.Width=o1s[0][15]; this.Height=o1s[0][16]; this.i1d=o1s[0][17]; this.o16=o1s[0][18]; this.O16=o1s[0][19]; this.i12=o1s[0][20]; this.l12=o1s[0][21]; this.I12=o1s[0][22]; this.o13=o1s[0][23]; this.O13=o1s[0][24]; this.O1u=o1s[0][25]; this.l1u=o1s[0][26]; this.i1u=o1s[0][27]; this.I1u=o1s[0][28]; this.o1v=o1s[0][29]; this.O1v=o1s[0][30]; this.l1v=o1s[0][31]; this.i1v=o1s[0][32]; this.I1v=o1s[0][33]; this.o1w=o1s[0][34]; this.O1w=o1s[0][35]; this.l1w=o1s[0][36]; this.i1w=o1s[0][37]; this.I1w=o1s[0][38]; this.o1x=o1s[0][39]; this.O1x=o1s[0][40]; this.l1x=o1s[0][41]; this.i1x=o1s[0][42]; this.I1x=o1s[0][43]; this.Opacity=o1s[0][44]; this.I1q=o1s[0][45]; this.o1r=o1s[0][46]; this.i1q=o1s[0][47]; this.o1y=o1s[0][48]; this.IsStatic=o1s[0][49]; this.O1y=new RadHashtable(); this.l1y=new Array(); this.O19= false; this.TemplateEnabled= false; this.PopulateMenuTree(o1e,O1s,l1s); this.RootGroup=this.GetGroup(o1s[0][50]); if (!this.i11.Ig(this.IsContext)){ this.RootGroup.Visible= true; } this.i1y=""; this.i1y=o1s[0][51]; this.I1y=o1s[0][52]; this.i14=o1s[0][53]; this.I14=o1s[0][54]; this.o1z=o1s[0][55]; this.O1z=""; this.O1d= false; if (this.RootGroup){ this.Container=this.RootGroup.Container; } this.GroupStateManagement=new Array(); this.FirstClick= false; if (!this.ClickToOpen){ this.FirstClick= true; } this.o19=0; if (this.IsContext && this.i11.Ig(RadMenuNamespace.tlrkContextMenus)){if (this.ContextHtmlElementID){RadMenuNamespace.tlrkContextMenus.AddItem(this.ContextHtmlElementID,this ); }else {RadMenuNamespace.tlrkContextMenus.l17("\144efault"); RadMenuNamespace.tlrkContextMenus.AddItem("def\x61\165lt",this ); }}if (this.i11.Ig(RadMenuNamespace.tlrkKeyboard)){RadMenuNamespace.tlrkKeyboard[RadMenuNamespace.tlrkKeyboard.length]=this ; }if (this.i11.Ig(RadMenuNamespace.tlrkMenus)){RadMenuNamespace.tlrkMenus[RadMenuNamespace.tlrkMenus.length]=this ; }var l11=this ; this.i11.AttachEventListener(document,"\x6dousedow\x6e", function (processedEvent){l11.l1z(processedEvent); } ); if (typeof(ExtendMenuWithScroll)!="undefine\x64" && (typeof(ExtendMenuWithScroll)=="\x66unction")){ExtendMenuWithScroll(); }if (typeof(ExtendMenuWithKeyboard)!="undefined" && (typeof(ExtendMenuWithKeyboard)=="function")){ExtendMenuWithKeyboard(); }if (this.i11.Ig(this.KeyDown) && this.i11.Ig(this.KeyUp)){ this.i11.AttachEventListener(document,"keydow\x6e", function (processedEvent){l11.KeyDown(processedEvent); } ); this.i11.AttachEventListener(document,"\x6beyup", function (processedEvent){l11.KeyUp(processedEvent); } ); } this.i1z=0; this.I1z=-1; this.o20=-1; this.ScrollLeftTime=0; this.ScrollRightTime=0; this.ScrollUpTime=0; this.ScrollDownTime=0; this.O20= false; this.l20= false; this.InitDefaults(); }RadMenu.prototype.InitDefaults= function (){if (((document.readyState && document.readyState=="c\x6f\x6dplete") || typeof(document.readyState)=="und\x65\x66ined") && !this.l20){RadMenuNamespace.MenuCopyToBody(); if (this.RootGroup.i1n){ this.RootGroup.i1n(); }RadMenuNamespace.i20(this ); if (RadMenuHelperUtils.Ig(this.o1z)){var I20=this.AllItems.l17(this.o1z); if (I20!=null){ this.ClickToOpen= true; this.FirstClick= true; this.FShowPath(I20, true , false ,""); }}if (this.IsStatic== true){ this.PositionTopGroup(); } this.l20= true; }};RadMenu.prototype.O12= function (o21){var O21=""; if (this.i11.Ig(o21)){if (this.i11.Ig(this.ImagesBaseDir)){O21=this.ImagesBaseDir+o21; }else {O21=o21; }}return O21; };RadMenu.prototype.PositionTopGroup= function (){ this.I18(this.i1z); if (this.i11.Ig(this.RootGroup)){if ((this.I1z<0) && (this.o20<0)){if (this.O1t== true){ this.I1z=this.l1t; this.o20=this.i1t; }else { this.I1z=this.getx(); this.o20=this.gety(); }}if (!(RadMenuNamespace.l21)){var i21=document.body; RadMenuNamespace.CopyObjToBody(i21,this.RootGroup.Container); }var I21=this.i11.ls(); var o22=this.i11.ScrollLeft(); var lq=this.i11.lk(this.RootGroup.Container); if (this.i11.Ig(lq.position) || lq.position==""){lq.position="a\x62sol\x75\x74e"; }lq.top=I21+this.o20+"px"; lq.left=o22+this.I1z+"\x70\x78"; var l11=this ; if (this.O1c.IsIE5Mac || this.O1c.IsIE5Win){ this.i1z=window.setTimeout(this.ID+".Pos\x69\x74ionTo\x70\x47rou\x70();",this.I1x); ; }else { this.i1z=window.setTimeout( function (){l11.PositionTopGroup(); } ,this.I1x); }}};RadMenu.prototype.ImagePreload= function (O22,l22){if (O22==l22){ this.O1d= true; }};RadMenu.prototype.PopulateMenuTree= function (o1e,O1s,l1s){var i=0; for (i=0; i<o1e.length; i++){var i22=new RadMenuGroup(this,o1e[i]); this.AllGroups.Add(i22); var I22=i22.Container.getElementsByTagName("TD"); for (var o23=0; o23<I22.length; o23++){I22[o23].setAttribute("unselectabl\x65","\x6fn"); }}for (i=0; i<O1s.length; i++){var Ic=new RadMenuItem(this,O1s[i],l1s); if (this.i11.Ig(Ic.I15)){ this.TemplateEnabled= true; } this.AllItems.Add(Ic); if (this.i11.Ig(Ic.l14)){var O23="i"; if (this.i11.Ig(Ic.I14)){O23+=Ic.I14; }if (this.i11.Ig(Ic.i14)){O23+=Ic.i14; }O23+=Ic.l14; this.O1y.AddItem(O23,Ic); }}if (l1s && l1s.length>0){for (i=0; i<l1s.length; i++){if (this.GetItem(l1s[i][0])){ (this.GetItem(l1s[i][0])).CustomAttributes=l1s[i]; }}}var l23=this.AllGroups.Values; for (i=0; i<l23.length; i++){var R=0; var Ic=this.GetItem(l23[i].l1e); l23[i].O11=Ic; var i23=l23[i].i17; for (R=0; R<i23.length; R++){var I23=i23[R]; I23.O11=Ic; if (R==0){I23.PreviousItem=i23[i23.length-1]; }else {I23.PreviousItem=i23[R-1]; }if (R==(i23.length-1)){I23.NextItem=i23[0]; }else {I23.NextItem=i23[R+1]; }}}};RadMenu.prototype.getx= function (){return this.i11.is(this.RootGroup.Container); };RadMenu.prototype.gety= function (){return this.i11.Ot(this.RootGroup.Container); };RadMenu.prototype.ShowMenu= function (){var lq=RadMenuHelperUtils.lk(this.RootGroup.Container); this.ShowOverlay(lq.left,lq.top); this.i11.Show(this.RootGroup.Container); };RadMenu.prototype.HideMenu= function (){ this.i11.Ip(this.RootGroup.Container); this.RootGroup.o1q(); };RadMenu.prototype.GetItem= function (o24){return this.AllItems.l17(o24); };RadMenu.prototype.GetGroup= function (O24){return this.AllGroups.l17(O24); };RadMenu.prototype.ProcItem= function (l24,i19){ this.I18(this.o19); this.O19= true; var l19=this.AllGroups.l17(i19); var i24=this.AllItems.l17(l24.id); if (i24==(i24.ParentGroup.I19)){return; }if (!i24 || !i24.Enabled){return; }var o1a=i24.Level; if (this.i11.Ig(i19) && this.GroupStateManagement[o1a+1]==i19){return; } this.CloseAll(o1a); if (l19 && (this.FirstClick== true)){ this.GroupStateManagement[o1a+1]=i19; l19.Show(l24); }var O1a=i24.ParentGroup.I19; if (i24==O1a){return; }if (O1a){O1a.RemoveHilight(); }i24.ParentGroup.I19=i24; if (!this.i11.Ig(i24.I15)){i24.ApplyHilight(); }} ; RadMenu.prototype.CloseAll= function (I24,o25){for (var i=this.GroupStateManagement.length-1; i>I24; i--){if (this.GroupStateManagement[i]){var O25=this.GetGroup(this.GroupStateManagement[i]); if (O25){ this.i11.Ip(O25.Container); O25.o1q(); O25.Visible= false; this.GroupStateManagement[i]=null; if (O25.I19){O25.I19.RemoveHilight(); O25.I19=null; }if (O25.OnClientGroupCollapse){var s=O25.OnClientGroupCollapse+"(this)\x3b"; eval(s); }}}}if ((I24==0) && this.RootGroup.I19){if (!o25){ this.RootGroup.I19.RemoveHilight(); this.RootGroup.I19=null; }}} ; RadMenu.prototype.l1l= function (){var l11=this ; this.I18(this.o19); if (this.O1c.IsIE5Mac || this.O1c.IsIE5Win){ this.o19=window.setTimeout(this.ID+"\x2eCloseAll\x28\x30);"+this.ID+"\x2eUsesKeybo\x61\x72d =\x20\x66a\x6c\x73e;\x77\x69ndo\x77\056\x73ta\x74us=\047\047;",this.I1x); }else { this.o19=window.setTimeout( function (){l11.CloseAll(0); l11.O19= false; window.status=""; } ,this.I1x); }} ; RadMenu.prototype.I18= function (l25){if (l25!=0){clearTimeout(l25); l25=0; }} ; RadMenu.prototype.FShowPath= function (i25,I25,o26,O26){var o11=i25.GetParentItems(); var l26=(O26!="")?O26: this.o13; for (var i=(o11.Values.length-1); i>=0; i--){var i26=o11.Values[i].Container; if (I25){ this.ProcItem(i26,o11.Values[i].i15); }if (o26){i26.className=l26; if (this.i1d== true && i26.Cells!=null){for (var i=0; i<i26.Cells.length; i++){i26.Cells[i].className=l26; }}}}};RadMenu.prototype.MouseUp= function (l24,processedEvent){var i24=this.GetItem(l24.id); if (i24.O18!= false){i24.l18(processedEvent); i24.RemoveClick(processedEvent); }};RadMenu.prototype.MouseDown= function (l24,processedEvent){var i24=this.GetItem(l24.id); if (!i24.Enabled){return null; }if (this.i11.Ig(i24.I15)){return true; }if (this.FirstClick== false){ this.FirstClick= true; if (i24.ChildGroup){ this.GroupStateManagement[i24.Level+1]=i24.ChildGroup.ID; i24.ChildGroup.Show(l24); }}else if (this.FirstClick && this.ClickToOpen && (i24.ParentGroup==this.RootGroup)){ this.FirstClick= false; this.CloseAll(0, true); }if (i24.O18!= false){i24.ApplyClick(processedEvent); i24.i18(processedEvent); }};RadMenu.prototype.I26= function (o27){if (this.i11.Io(o27,this.RootGroup.ID, false)){return true; }for (var i=0; i<this.GroupStateManagement.length; i++){if (this.i11.Ig(o27.id) && (this.GroupStateManagement[i]==o27.id)){return true; }else if (this.i11.Io(o27,this.GroupStateManagement[i], false)){return true; }}return false; };RadMenu.prototype.OnContext= function (processedEvent,O27){if (!(this.IsContext)){return; }if (!processedEvent){var processedEvent=window.event; }var l27=null;var i27= false; var l27=this.i11.Ih(processedEvent); if (this.I26(l27)){return; }if (this.i11.Ig(O27)){if (!this.i11.Op(l27,O27)){return; }}var I27=this.i11.lj(processedEvent); var o28=this.i11.ij(processedEvent); if (!this.i11.Ig(I27) || !this.i11.Ig(o28)){return; }var O28=this.i11.ScrollLeft()+this.i11.lt(); var l28=this.i11.ls()+this.i11.it(); I27=(I27>O28)?O28:I27; o28=(o28>l28)?l28:o28; this.i11.ok(processedEvent); this.RootGroup.GroupExpand(I27,o28,0,0); this.RootGroup.Visible= true; if (this.O1c.IsOpera){ this.i28= true; }return false; };RadMenu.prototype.l1z= function (processedEvent){if (this.ClickToOpen || this.IsContext){if (this.I26(this.i11.Ih(processedEvent))){return; } this.CloseAll(0); if (this.IsContext && this.RootGroup.Visible== true){if (this.O1c.IsOpera && this.i28){ this.i28= false; return true; } this.RootGroup.Visible= false; this.i11.Ip(this.RootGroup.Container); this.RootGroup.o1q(); if (this.RootGroup.OnClientGroupCollapse){var s=this.RootGroup.OnClientGroupCollapse+"\050thi\x73\x29;"; eval(s); }} this.O19= false; window.status=""; if (this.ClickToOpen){ this.FirstClick= false; }}};
