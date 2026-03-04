// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 页面切换功能
    const navItems = document.querySelectorAll('.nav-item a');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('page-title');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有导航项的活跃状态
            navItems.forEach(nav => nav.parentElement.classList.remove('active'));
            // 添加当前导航项的活跃状态
            this.parentElement.classList.add('active');
            
            // 隐藏所有页面
            pages.forEach(page => page.classList.remove('active'));
            // 显示对应页面
            const pageId = this.getAttribute('data-page') + '-page';
            document.getElementById(pageId).classList.add('active');
            
            // 更新页面标题
            pageTitle.textContent = this.textContent;
        });
    });
    
    // 新增储备项目页面跳转
    const addProjectBtn = document.getElementById('add-project-btn');
    const backToReserveBtn = document.getElementById('back-to-reserve');
    const reservePage = document.getElementById('reserve-page');
    const addProjectPage = document.getElementById('add-project-page');
    
    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', function() {
            reservePage.classList.remove('active');
            addProjectPage.classList.add('active');
            pageTitle.textContent = '新增储备项目';
        });
    }
    
    if (backToReserveBtn) {
        backToReserveBtn.addEventListener('click', function() {
            addProjectPage.classList.remove('active');
            reservePage.classList.add('active');
            pageTitle.textContent = '储备项目库管理';
        });
    }
    
    // 分步表单功能
    const steps = document.querySelectorAll('.step');
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('[id^="next-step-"]');
    const prevButtons = document.querySelectorAll('[id^="prev-step-"]');
    
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = parseInt(this.id.split('-')[2]);
            const nextStep = currentStep + 1;
            
            // 隐藏当前步骤
            formSteps[currentStep - 1].classList.remove('active');
            steps[currentStep - 1].classList.remove('active');
            
            // 显示下一步骤
            formSteps[nextStep - 1].classList.add('active');
            steps[nextStep - 1].classList.add('active');
        });
    });
    
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = parseInt(this.id.split('-')[2]);
            const prevStep = currentStep - 1;
            
            // 隐藏当前步骤
            formSteps[currentStep - 1].classList.remove('active');
            steps[currentStep - 1].classList.remove('active');
            
            // 显示上一步骤
            formSteps[prevStep - 1].classList.add('active');
            steps[prevStep - 1].classList.add('active');
        });
    });
    
    // 暂存按钮功能
    const saveDraftBtns = document.querySelectorAll('[id^="save-draft"]');
    saveDraftBtns.forEach(button => {
        button.addEventListener('click', function() {
            alert('项目已暂存');
        });
    });
    
    // 提交项目功能
    const submitProjectBtn = document.getElementById('submit-project');
    if (submitProjectBtn) {
        submitProjectBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('项目已提交');
            // 跳转回储备项目列表页面
            addProjectPage.classList.remove('active');
            reservePage.classList.add('active');
            pageTitle.textContent = '储备项目库管理';
        });
    }
    
    // 获取企业信息按钮
    const fetchCompanyInfoBtn = document.getElementById('fetch-company-info');
    if (fetchCompanyInfoBtn) {
        fetchCompanyInfoBtn.addEventListener('click', function() {
            alert('正在获取企业信息...');
            // 模拟填充企业信息
            setTimeout(() => {
                document.querySelector('#step-2 input[type="date"]').value = '2020-01-01';
                document.querySelector('#step-2 input[type="text"]:nth-of-type(2)').value = '张三';
                document.querySelector('#step-2 input[type="text"]:nth-of-type(3)').value = '1000万元';
                document.querySelector('#step-2 input[type="text"]:nth-of-type(4)').value = '存续';
                alert('企业信息获取成功');
            }, 1000);
        });
    }
    
    // 项目详情弹窗
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalCloseBtn = projectModal.querySelector('.close-btn');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            // 填充项目详情
            document.getElementById('modal-project-id').textContent = projectId;
            // 显示弹窗
            projectModal.classList.add('show');
        });
    });
    
    // 关闭项目详情弹窗
    function closeProjectModal() {
        projectModal.classList.remove('show');
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
    }
    
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    // 添加跟踪记录弹窗
    const trackingModal = document.getElementById('tracking-modal');
    const closeTrackingModalBtn = document.getElementById('close-tracking-modal');
    const trackingCloseBtn = trackingModal.querySelector('.close-btn');
    const saveTrackingBtn = document.getElementById('save-tracking');
    const trackingButtons = document.querySelectorAll('.tracking-btn');
    
    trackingButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackingModal.classList.add('show');
        });
    });
    
    // 关闭跟踪记录弹窗
    function closeTrackingModal() {
        trackingModal.classList.remove('show');
    }
    
    if (closeTrackingModalBtn) {
        closeTrackingModalBtn.addEventListener('click', closeTrackingModal);
    }
    
    if (trackingCloseBtn) {
        trackingCloseBtn.addEventListener('click', closeTrackingModal);
    }
    
    trackingModal.addEventListener('click', function(e) {
        if (e.target === trackingModal) {
            closeTrackingModal();
        }
    });
    
    // 保存跟踪记录
    if (saveTrackingBtn) {
        saveTrackingBtn.addEventListener('click', function() {
            alert('跟踪记录已保存');
            closeTrackingModal();
        });
    }
    
    // 筛选按钮功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 分页按钮功能
    const pageButtons = document.querySelectorAll('.page-controls .btn');
    
    pageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            pageButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 接受/拒绝按钮功能
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const rejectButtons = document.querySelectorAll('.reject-btn');
    
    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('确定接受该项目？')) {
                alert('项目已接受，已流转至关注项目库');
            }
        });
    });
    
    rejectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reason = prompt('请选择拒绝理由：\n1. 行业不符\n2. 投资规模不匹配\n3. 风险过高\n4. 其他');
            if (reason) {
                alert('项目已拒绝，退回至储备库');
            }
        });
    });
    
    // 启动投决按钮
    const investButtons = document.querySelectorAll('.invest-btn');
    
    investButtons.forEach(button => {
        button.addEventListener('click', function() {
            const opinion = prompt('请填写初步评估意见：');
            if (opinion) {
                alert('投决流程已启动，项目已流转至投资项目库');
            }
        });
    });
    
    // 暂不投资按钮
    const notInvestButtons = document.querySelectorAll('.not-invest-btn');
    
    notInvestButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reason = prompt('请选择暂不投资原因：\n1. 行业周期不符\n2. 估值超出预期\n3. 风险不可控\n4. 其他');
            if (reason) {
                alert('项目已转入暂不投资库');
            }
        });
    });
    
    // 删除按钮功能
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('确定删除该项目？删除后不可恢复')) {
                alert('项目已删除');
            }
        });
    });
    
    // 导出按钮功能
    const exportButtons = document.querySelectorAll('.export-btn');
    
    exportButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('正在导出项目信息...');
        });
    });
    
    // 提交材料按钮
    const materialButtons = document.querySelectorAll('.material-btn');
    
    materialButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('提交材料功能');
        });
    });
    
    // 终止投决按钮
    const stopInvestButtons = document.querySelectorAll('.stop-invest-btn');
    
    stopInvestButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reason = prompt('请填写终止投决原因：');
            if (reason) {
                alert('投决已终止，项目已转入暂不投资库');
            }
        });
    });
    
    // 搜索功能
    const searchButtons = document.querySelectorAll('.search-box button');
    
    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const keyword = input.value.trim();
            if (keyword) {
                alert('正在搜索：' + keyword);
            } else {
                alert('请输入搜索关键词');
            }
        });
    });
    
    // 回车键搜索
    const searchInputs = document.querySelectorAll('.search-box input');
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const keyword = this.value.trim();
                if (keyword) {
                    alert('正在搜索：' + keyword);
                } else {
                    alert('请输入搜索关键词');
                }
            }
        });
    });
    
    // 每页显示条数变化
    const pageSizeSelects = document.querySelectorAll('.page-size select');
    
    pageSizeSelects.forEach(select => {
        select.addEventListener('change', function() {
            alert('每页显示条数已更改为：' + this.value);
        });
    });
    
    // 文件上传功能
    const fileUpload = document.getElementById('file-upload');
    if (fileUpload) {
        fileUpload.addEventListener('change', function(e) {
            const files = e.target.files;
            const attachmentList = document.querySelector('.attachment-list');
            
            attachmentList.innerHTML = '';
            
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const attachmentItem = document.createElement('div');
                attachmentItem.className = 'attachment-item';
                attachmentItem.innerHTML = `
                    <div class="attachment-info">
                        <span class="attachment-name">${file.name}</span>
                        <span class="attachment-size">${(file.size / (1024 * 1024)).toFixed(2)}MB</span>
                    </div>
                    <div class="attachment-actions">
                        <button class="btn small secondary">预览</button>
                        <button class="btn small secondary">替换</button>
                        <button class="btn small danger">删除</button>
                    </div>
                `;
                attachmentList.appendChild(attachmentItem);
            }
        });
    }
});

// 扩展String.prototype.contains方法
if (!String.prototype.contains) {
    String.prototype.contains = function(search) {
        return this.indexOf(search) !== -1;
    };
}